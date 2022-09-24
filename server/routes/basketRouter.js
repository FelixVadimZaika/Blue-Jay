const Router = require('express')
const router = new Router()

const basketControl = require('../control/basketControl')

// ------- Добавив перевірку на авторизацію для того, щоб витягнуть звідти авторизованого юзера -------- //
const authMiddleware = require('../middleware/authMiddleware')

// ------- CRUD корзини ------- //
router.get('/', authMiddleware , basketControl.getBasketUser)
router.post('/', authMiddleware , basketControl.addToBasket)

module.exports = router