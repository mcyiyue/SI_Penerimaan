const router = require('express').Router()
const { users } = require('../controllers')

router.post('/adduser',users.addUser)
router.post('/loginuser',users.loginUser)
router.post('/deluser',users.delUser)
router.post('/edituser',users.editUser)

module.exports = router