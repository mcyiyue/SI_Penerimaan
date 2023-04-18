const router = require('express').Router()
const { bank } = require('../controllers')
const { checkAccess } = require('../middlewares/authUser')

router.post('/addbank', checkAccess('manajemenbank'), bank.addBank)
router.delete('/delbank/:id', checkAccess('manajemenbank'), bank.delBank)
router.put('/editbank/:id', checkAccess('manajemenbank'), bank.editBank)
router.get('/allbank', checkAccess('manajemenbank'), bank.allBank)

module.exports = router