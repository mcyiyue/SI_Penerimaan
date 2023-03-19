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
    .then(resp => res.status(201).send({...resp, username,}))
    .catch(e => res.status(400).send(e.code))
}

const login= async (req, res) => {
    const {username, password} = req.body
    knex('users')
    .where({
        username:username
    }).select('*')
    .then((resp) => {
        const isValid = bcrypt.compareSync(password, resp[0].password)
        if(isValid){
            delete resp[0].password
            res.send(resp)
        } else{
            res.status(400).send('USERNAME ATAU PASSWORD SALAH')
        }       
    })
    .catch(e => res.status(400).send(e.code))
}

module.exports= {
    addUser,
    login
}