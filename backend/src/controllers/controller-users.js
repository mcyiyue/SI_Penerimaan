const db = require('../configs/db')
const bcrypt = require('bcrypt')

const allUser= async (req, res) => {
    db('users')
    .select('*')
    .then((resp) => {
        if(resp.length){
            const mapResp = resp.map((data) => {
                    delete data.password
                    return data
                })
            res.status(200).send(mapResp)
        } else{
            res.send('TIDAK ADA DATA PENGGUNA')
        }
    })
    .catch(e => res.status(400).send(e))
}


const addUser= async (req, res) => {
    const {username, password, nama} = req.body
    const salt = await bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hashSync(password, salt);
    db('users')
    .insert({
        username:username,
        password:hashPassword,
        nama:nama 
    })
    .then(resp => res.status(201).send(resp))
    .catch(e => res.status(400).send(e.code))
}

const delUser= async (req, res) => {
    const {username} = req.body
    db('users')
    .where('username', username)
    .del()
    .then(resp => res.send(resp.toString()))
    .catch(e => res.status(400).send(e))
}

const editUser= async (req, res) => {
    const {username, password, nama, active, groupsId, unitsId} = req.body
    const salt = bcrypt.genSaltSync(10)
    const hashPassword = password ? await bcrypt.hashSync(password, salt) : ''
    db('users')
    .where('username', username)
    .update({
        username:username,
        password:hashPassword ? hashPassword : undefined,
        nama:nama,
        active:active,
        groups_id:groupsId,
        units_id: unitsId
    })
    .then(resp => res.status(201).send(resp.toString()))
    .catch(e => res.status(400).send(e.code))
}

module.exports= {
    allUser,
    addUser,
    delUser,
    editUser
}