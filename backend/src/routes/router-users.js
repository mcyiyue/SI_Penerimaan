const router = require('express').Router()
const { users } = require('../controllers')
const { checkAccess } = require('../middlewares/authUser')

router.post('/adduser', checkAccess('manajemenuser'), users.addUser)
router.delete('/deluser', checkAccess('manajemenuser'), users.delUser)
router.put('/edituser', checkAccess('manajemenuser'), users.editUser)
router.get('/alluser', checkAccess('manajemenuser'), users.allUser)

module.exports = router