const db = require('../configs/db')

const allBku= async (req, res) => {
    const {tglAwal, tglAkhir, bank} = req.body
    db('transaksi')
    .whereBetween('tgl', [tglAwal, tglAkhir])
    .where('bank_alias', bank)
    .groupBy([
        'unit_nama',
        'debet',
        'jenis',
        'tgl'        
    ])
    .count({
        jumlah_transaksi: 'debet'
    })
    .sum({
        total_debet: 'debet',
        total_kredit: 'kredit'
    })
    .select('transaksi.*', 'debet as tarif')
    .then((resp) => {
        res.status(200).send(resp)
    })
    .catch(e => res.status(400).send(e))
}

module.exports= {
    allBku
}