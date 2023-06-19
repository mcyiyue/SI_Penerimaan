const router = require('express').Router()
const { bku } = require('../controllers')
const { checkModules } = require('../middlewares/authUser')

router.post('/bku', bku.allBku)

module.exports = router