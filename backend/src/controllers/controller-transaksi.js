const db = require('../configs/db')
const bcrypt = require('bcrypt')

const allTrans= async (req, res) => {
    const {tglAwal, tglAkhir} = req.body
    db('transaksi')
    .where('tgl', '>=', tglAwal)
    .andWhere('tgl', '=<', tglAkhir)
    .select('*')
    .then((resp) => {
        res.status(200).send(resp)
    })
    .catch(e => res.status(400).send(e))
}

const addTrans= async (req, res) => {
    const {id, kode, tgl, nim, nama, jenjang, unitNama, angkatan, fakultas, prodi, jenis, kredit, debet, status, basAkun, bankAlias} = req.body
    db('bank')
    .insert({
        id: id,
        kode: kode,
        tgl: tgl,
        nim: nim,
        nama: nama,
        jenjang: jenjang,
        unit_nama: unitNama,
        angkatan: angkatan,
        fakultas: fakultas,
        prodi: prodi,
        jenis: jenis,
        kredit: kredit,
        debet: debet,
        status: status,
        bas_akun: basAkun,
        bank_alias: bankAlias
    })
    .then(resp => res.status(201).send(resp))
    .catch(e => res.status(400).send(e.code))
}

const delBank= async (req, res) => {
    const id = req.params.id
    db('bank')
    .where('id', id)
    .del()
    .then(resp => res.send(resp.toString()))
    .catch(e => res.status(400).send(e))
}

const editBank= async (req, res) => {
    const id = req.params.id
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
    allTrans,
    addTrans,
    delBank,
    editBank
}