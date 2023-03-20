const router = require('express').Router()
const { users } = require('../controllers')

router.post('/adduser',users.addUser)
router.post('/loginuser',users.loginUser)
router.delete('/deluser',users.delUser)
router.put('/edituser',users.editUser)
router.put('/changepass',users.changePass)
router.get('/alluser',users.allUser)

module.exports = router