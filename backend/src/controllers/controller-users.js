const dbconfig = require('../config/db')
const bcrypt = require('bcrypt');
const knex = require('knex')({
    client:'mysql',
    connection: dbconfig
})

const addUser= async (req, res) => {
    const {username, password, nama} = req.body
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    knex('users')
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
    knex('users')
    .where('username', username)
    .del()
    .then(resp => res.send(resp.toString()))
    .catch(e => res.status(400).send(e))
}

const editUser= async (req, res) => {
    const {username, password, nama, active, groupsId, unitsId} = req.body
    const salt = bcrypt.genSaltSync(10)
    const hashPassword = password ? bcrypt.hashSync(password, salt) : ''
    knex('users')
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


const loginUser= async (req, res) => {
    const {username, password=''} = req.body
    knex('users')
    .where({
        username:username,
        active:1
    }).select('*')
    .then((resp) => {
        if(resp.length){
            const isValid = bcrypt.compareSync(password, resp[0].password)
            if(isValid){
                delete resp[0].password
                res.send(resp)
            } else{
                res.status(400).send('USERNAME ATAU PASSWORD SALAH')
            }
        } else{
            res.status(400).send('USERNAME ATAU PASSWORD SALAH')
        }
    })
    .catch(e => res.status(400).send(e))
}

module.exports= {
    addUser,
    delUser,
    editUser,
    loginUser
}