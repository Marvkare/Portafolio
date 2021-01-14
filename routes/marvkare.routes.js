let {Router} = require('express')
let router = Router()

const {
    renderMarv
} = require('../controllers/marvkare.controllers')

router.get('/marvkare', renderMarv)

module.exports = router