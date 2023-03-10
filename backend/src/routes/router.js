const router = require('express').Router()
const {transaksi, bank} = require('../controllers')


router.post('/transaksi', transaksi.getDataTransaksi)

router.post('/lastTotal', transaksi.getLastTotal)

router.post('/bku', transaksi.getDataBKU)

router.post('/bank', bank.getDaftarBank)

module.exports = router