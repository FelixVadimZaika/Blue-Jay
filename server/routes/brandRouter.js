const Router = require('express')
const router = new Router()
const brandControl =require('../control/brandControl')


router.post('/', brandControl.create)
router.get('/', brandControl.getAll)
module.exports = router