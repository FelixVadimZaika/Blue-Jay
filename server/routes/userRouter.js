const Router = require('express')
const router = new Router()
const userControl = require('../control/userControl')

router.post('/registration', userControl.registration)
router.post('/login', userControl.login)
router.get('/auth', userControl.check)

//router.get('/auth', (req,res) => {
//    res.json({message: 'ВСЕ РАБОТАЄ!'})
//})
//
module.exports = router