const router = require('express').Router()
const { transaksi } = require('../controllers')
const { checkAccess } = require('../middlewares/authUser')

router.post('/addtrans', checkAccess('manajementransaksi'), transaksi.addTrans)
router.delete('/deltrans/:id', checkAccess('manajementransaksi'),  transaksi.delTrans)
router.put('/edittrans/:id', checkAccess('manajementransaksi'), transaksi.editTrans)
router.post('/alltrans', checkAccess('manajementransaksi'), transaksi.allTrans)

module.exports = router