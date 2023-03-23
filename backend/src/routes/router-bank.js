const router = require('express').Router()
const { bank } = require('../controllers')

router.post('/addbank',bank.addBank)
router.delete('/delbank',bank.delBank)
router.put('/editbank',bank.editBank)
router.get('/allbank',bank.allBank)

module.exports = router