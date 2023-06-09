const router = require('express').Router()
const { auth } = require('../controllers')

router.post('/loginuser', auth.loginUser)
router.get('/me', auth.me)
router.put('/changepass', auth.changePass)
router.delete('/logoutuser', auth.logoutUser)

module.exports = router