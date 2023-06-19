const router = require('express').Router()
const { group } = require('../controllers')
const { checkModules } = require('../middlewares/authUser')

router.post('/addgroup', checkModules('manajemengroup'), group.addGroup)
router.delete('/delgroup/:id', checkModules('manajemengroup'), group.delGroup)
router.put('/editgroup/:id', checkModules('manajemengroup'), group.editGroup)
router.get('/allgroup', checkModules('manajemengroup'), group.allGroup)
router.get('/allgroupaccess/:id', checkModules('manajemengroup'), group.allGroupAccess)
router.get('/addgroupaccess', checkModules('manajemengroup'), group.addGroupAccess)
router.get('/delgroupaccess', checkModules('manajemengroup'), group.delGroupAccess)

module.exports = router