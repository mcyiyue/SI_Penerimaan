const db = require('../configs/db')

const allTrans= async (req, res) => {
    const {tglAwal, tglAkhir} = req.body
    db('transaksi')
    .whereBetween('tgl', [tglAwal, tglAkhir])
    .select('*')
    .then((resp) => {
        res.status(200).send(resp)
    })
    .catch(e => res.status(400).send(e))
}

const addTrans= async (req, res) => {
    const {id, kode, tgl, nim, nama, jenjang, unitNama, angkatan, fakultas, prodi, jenis, kredit, debet, status, basAkun, bankAlias} = req.body
    db('transaksi')
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

const delTrans= async (req, res) => {
    const id = req.params.id
    db('transaksi')
    .where('id', id)
    .del()
    .then(resp => res.send(resp.toString()))
    .catch(e => res.status(400).send(e))
}

const editTrans= async (req, res) => {
    const id = req.params.id
    const {tgl, nim, nama, jenjang, unitNama, angkatan, fakultas, prodi, jenis, kredit, debet, status, basAkun, bankAlias} = req.body
    db('transaksi')
    .where('id', id)
    .update({
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
    .then(resp => res.status(201).send(resp.toString()))
    .catch(e => res.status(400).send(e.code))
}

const getTransById= async (req, res) => {
    const id = req.params.id
    db('transaksi')
    .where('id', id)
    .select('*')
    .then((resp) => {
        res.status(200).send(resp)
    })
    .catch(e => res.status(400).send(e))
}

module.exports= {
    allTrans,
    addTrans,
    delTrans,
    editTrans,
    getTransById
}