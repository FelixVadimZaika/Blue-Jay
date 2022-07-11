const Router = require('express')
const router = new Router()
const deviceControl =require('../control/deviceControl')
router.post('/', deviceControl.create)
router.get('/',deviceControl.getAll)
router.get('/:id',deviceControl.getOne)
module.exports = router