const db = require('../configs/db')

const realisasiUnitKerja = async (req, res) => {
    const {tglAwal, tglAkhir} = req.body
    db('units')
    .leftJoin('transaksi', 'units.nama', 'transaksi.unit_nama')
    .whereBetween('transaksi.tgl', [tglAwal, tglAkhir])
    .andWhere('transaksi.bas_akun', 'not like', '0%')
    .andWhere('status','D')
    .select('transaksi.unit_nama')
    .sum({
        total_debet: 'transaksi.debet',
    })
    .groupBy('transaksi.unit_nama')
    .orderBy('units.id')
    .then((resp) => {
        res.status(200).send(resp)
    })
    .catch(e => {
        console.log(e)
        res.status(400).send(e)
    })
}

const realisasiBas = async (req, res) => {
    const {tglAwal, tglAkhir} = req.body
    db('bas')
    .leftJoin('transaksi', 'bas.akun', 'transaksi.bas_akun')
    .whereBetween('transaksi.tgl', [tglAwal, tglAkhir])
    .andWhere('transaksi.bas_akun', 'not like', '0%')
    .andWhere('status','D')
    .select('transaksi.bas_akun')
    .sum({
        total_debet: 'transaksi.debet',
    })
    .groupBy('transaksi.bas_akun')
    .orderBy('bas.akun')
    .then((resp) => {
        res.status(200).send(resp)
    })
    .catch(e => {
        console.log(e)
        res.status(400).send(e)
    })
}

module.exports={
    realisasiUnitKerja,
    realisasiBas
}