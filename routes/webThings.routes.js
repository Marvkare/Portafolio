let {Router} = require('express')
let router = Router()

let {
    renderWebThings
} = require('../controllers/webthings.controllers.js')

router.get('/webthings', renderWebThings)


module.exports = router