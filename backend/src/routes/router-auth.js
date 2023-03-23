const router = require('express').Router()
const { auth } = require('../controllers')

router.post('/loginuser',auth.loginUser)
router.post('/me',auth.me)
router.put('/changepass',auth.changePass)

module.exports = router