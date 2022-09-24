const Router = require('express')
const router = new Router()
const userControl = require('../control/userControl')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userControl.registration)
router.post('/login', userControl.login)
router.get('/auth',authMiddleware, userControl.check)

module.exports = router