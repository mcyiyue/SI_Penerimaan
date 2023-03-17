const router = require('express').Router()
const {transaksi, bank, users} = require('../controllers')


router.post('/transaksi', transaksi.getDataTransaksi)

router.post('/lastTotal', transaksi.getLastTotal)

router.post('/bku', transaksi.getDataBKU)

router.post('/bank', bank.getDaftarBank)

router.post('/adduser',users.addUser)

router.post('/login',users.login)

module.exports = router