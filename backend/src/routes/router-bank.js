const router = require('express').Router()
const { bank } = require('../controllers')
const { checkModules, checkAccess } = require('../middlewares/authUser')

router.post('/addbank', checkModules('manajemenbank'), bank.addBank)
router.delete('/delbank/:id', checkModules('manajemenbank'), bank.delBank)
router.put('/editbank/:id', checkModules('manajemenbank'), bank.editBank)
router.get('/allbank', checkAccess('manajemenbank'), bank.allBank)
router.get('/bank/:id', checkAccess('manajemenbank'), bank.getBankById)

module.exports = router