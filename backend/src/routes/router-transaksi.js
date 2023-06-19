const router = require('express').Router()
const { transaksi } = require('../controllers')
const { checkModules } = require('../middlewares/authUser')

router.post('/addtrans', checkModules('manajementransaksi'), transaksi.addTrans)
router.delete('/deltrans/:id', checkModules('manajementransaksi'),  transaksi.delTrans)
router.put('/edittrans/:id', checkModules('manajementransaksi'), transaksi.editTrans)
router.post('/alltrans', checkModules('manajementransaksi'), transaksi.allTrans)
router.get('/trans/:id', checkModules('manajementransaksi'), transaksi.getTransById)

module.exports = router