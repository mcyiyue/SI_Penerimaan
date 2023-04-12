const db = require('../configs/db')
const bcrypt = require('bcrypt');

const loginUser= async (req, res) => {
    const {username, password=''} = req.body
    db('users')
    .leftJoin('units', 'users.units_id', 'units.id')
    .leftJoin('groups', 'users.groups_id', 'groups.id')
    .where({
        'users.username':username,
        'users.active':1
    })
    .select({
        id: 'users.id',
        username:'users.username',
        password:'users.password',
        nama: 'users.nama',
        groups_id:'groups_id',
        units_id: 'users.units_id',
        groups_nama:'groups.nama',
        units_nama:'units.nama'
    })
    .then((resp) => {
        if(resp.length){
            const isValid = bcrypt.compareSync(password, resp[0].password)
            if(isValid){
                delete resp[0].password
                db('group_access')
                .leftJoin('sub_modules','group_access.sub_modules_id','sub_modules.id' )
                .leftJoin('modules', 'sub_modules.modules_id', 'modules.id')
                .where({
                    'group_access.groups_id':resp[0].groups_id
                })
                .select({
                    modules_id:'modules.id',
                    modules_nama:'modules.nama',
                    sub_modules_id:'sub_modules.id',
                    sub_modules_route:'sub_modules.route'
                })
                .then((modulesResp) => {
                    console.log(modulesResp)
                    let modules=[]
                    let tempModules
                    for (let i = 0; i < modulesResp.length; i++){
                        if (tempModules!=modulesResp[i].modules_id){
                            modules.push({
                                id:modulesResp[i].modules_id,
                                nama:modulesResp[i].modules_nama,
                                sub_modules:[{
                                    id: modulesResp[i].sub_modules_id,
                                    route:modulesResp[i].sub_modules_route
                                }]
                            })
                            tempModules=modulesResp[i].modules_id
                        } else {
                            console.log(modulesResp[i],'onLoop')
                            modules[modules.length-1].sub_modules.push({
                                id: modulesResp[i].sub_modules_id,
                                route:modulesResp[i].sub_modules_route
                            })
                        }
                        
                    }
                    console.log(modules)
                    console.log(modules[0].sub_modules)
                })
                req.session.userId=resp[0].id
                res.status(200).send(resp[0])
            } else{
                res.status(401).send('USERNAME ATAU PASSWORD SALAH')
            }
        } else{
            res.status(401).send('USERNAME ATAU PASSWORD SALAH')
        }
    })
    .catch(e => {
        console.log(e)
        res.status(400).send(e)
    })
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