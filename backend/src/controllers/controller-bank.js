const db = require('../configs/db')
const bcrypt = require('bcrypt')

const allBank= async (req, res) => {
    db('bank')
    .select('*')
    .then((resp) => {
        if(resp.length){
            res.status(200).send(resp)
        } else{
            res.send('TIDAK ADA DATA BANK')
        }
    })
    .catch(e => res.status(400).send(e))
}


const addBank= async (req, res) => {
    const {noRek, nama, alias, perusahaan, noKPPN, tglBuka} = req.body
    db('bank')
    .insert({
        noRek:  noRek,
        nama:   nama,
        alias:  alias,
        perusahaan: perusahaan,
        noKPPN: noKPPN,
        tglBuka: tglBuka
    })
    .then(resp => res.status(201).send(resp))
    .catch(e => res.status(400).send(e.code))
}

const delBank= async (req, res) => {
    const {id} = req.body
    db('bank')
    .where('id', id)
    .del()
    .then(resp => res.send(resp.toString()))
    .catch(e => res.status(400).send(e))
}

const editBank= async (req, res) => {
    const {noRek, nama, alias, perusahaan, noKPPN, tglBuka, tglTutup} = req.body
    db('bank')
    .where('id', id)
    .update({
        noRek:  noRek,
        nama:   nama,
        alias:  alias,
        perusahaan: perusahaan,
        noKPPN: noKPPN,
        tglBuka: tglBuka,
        tglTutup: tglTutup ? tglTutup : undefined
    })
    .then(resp => res.status(201).send(resp.toString()))
    .catch(e => res.status(400).send(e.code))
}

module.exports= {
    allBank,
    addBank,
    delBank,
    editBank
}