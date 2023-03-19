const router = require('express').Router()
const { users } = require('../controllers')

router.post('/adduser',users.addUser)
router.post('/login',users.login)

module.exports = router