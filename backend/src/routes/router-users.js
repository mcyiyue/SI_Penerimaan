const router = require('express').Router()
const { users } = require('../controllers')
const { checkModules } = require('../middlewares/authUser')

router.post('/adduser', checkModules('manajemenuser'), users.addUser)
router.delete('/deluser', checkModules('manajemenuser'), users.delUser)
router.put('/edituser/:id', checkModules('manajemenuser'), users.editUser)
router.get('/alluser', checkModules('manajemenuser'), users.allUser)
router.get('/user/:id', checkModules('manajemenuser'), users.getUserById)

module.exports = router