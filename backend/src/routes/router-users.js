const router = require('express').Router()
const { users } = require('../controllers')

router.post('/adduser',users.addUser)
router.delete('/deluser',users.delUser)
router.put('/edituser',users.editUser)
router.get('/alluser',users.allUser)

module.exports = router