const router = require('express').Router()
const { realisasi } = require('../controllers')
const { checkModules } = require('../middlewares/authUser')

router.post('/realisasiunitkerja', realisasi.realisasiUnitKerja)
router.post('/realisasibas', realisasi.realisasiBas)

module.exports = router