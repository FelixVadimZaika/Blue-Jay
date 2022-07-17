const Router = require('express')
const router = new Router()
const typeControl =require('../control/typeControl')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',checkRole('ADMIN'), typeControl.create)
router.get('/', typeControl.getAll)
module.exports = router