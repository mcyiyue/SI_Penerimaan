const db = require('../configs/db')
const bcrypt = require('bcrypt');

const loginUser= async (req, res) => {
    const {username, password=''} = req.body
    db('users')
    .where({
        username:username,
        active:1
    }).select('*')
    .then((resp) => {
        if(resp.length){
            const isValid = bcrypt.compareSync(password, resp[0].password)
            if(isValid){
                delete resp[0].password
                req.session.userId=resp[0].id
                res.status(200).send(resp[0])
            } else{
                res.status(401).send('USERNAME ATAU PASSWORD SALAH')
            }
        } else{
            res.status(401).send('USERNAME ATAU PASSWORD SALAH')
        }
    })
    .catch(e => res.status(400).send(e))
}

const logoutUser= async (req, res) => {
    req.session.destroy((e) => {
        if (e){
            res.status(400).send('Tidak Dapat Logout')
        } else {
            res.status(200).send('Berhasil Logout')
        }
    })
}

const me = async (req, res) => {
    if(!req.session.userId){
        res.status(401).send('Mohon Login ke Akun Anda')
    } else {
        db('users')
        .where({
            id:req.session.userId,
            active:1
        }).select('*')
        .then((resp) => {
            if(resp.length){
                delete resp[0].password
                res.status(200).send(resp[0])
            } else{
                res.status(401).send('USERNAME ATAU PASSWORD SALAH')
            }
        })
        .catch(e => res.status(400).send(e))
    }
}

const changePass= async (req, res) => {
    if(!req.session.userId){
        res.status(401).send('Mohon Login ke Akun Anda')
    } else {
        const {username, password, newPassword} = req.body
        db('users')
        .where({
            id:req.session.userId,
            active:1
        }).select('*')
        .then( async (resp) => {
            if(resp.length){
                const isValid = await bcrypt.compareSync(password, resp[0].password)
                if(isValid){
                    const salt = await bcrypt.genSaltSync(10)
                    const hashNewPassword = await bcrypt.hashSync(newPassword, salt)
                    db('users')
                    .where({
                        username: username
                    })
                    .update({
                        password:hashNewPassword
                    })
                    .then(resp2 => {
                        res.status(201).send(resp2.toString())
                    })
                    .catch(e => res.status(401).send(e.code))
                } else {
                    res.status(401).send('Password Lama Salah')
                }
            } else{
                res.status(401).send('Password Lama Salah')
            }
        })
        .catch(e => res.status(400).send(e))
    }
}

module.exports={
    loginUser,
    logoutUser,
    me,
    changePass
}