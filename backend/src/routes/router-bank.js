const router = require('express').Router()
const { bank } = require('../controllers')

router.post('/bank', bank.getDaftarBank)

module.exports = router