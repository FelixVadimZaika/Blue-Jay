const Router = require('express')
const router = new Router()
const typeControl =require('../control/typeControl')

router.post('/', typeControl.create)
router.get('/', typeControl.getAll)
module.exports = router