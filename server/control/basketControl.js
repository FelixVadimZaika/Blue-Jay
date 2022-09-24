const { Device, BasketDevice, Basket } = require("../models/models")

class BasketController {
    // ------ CRUD корзини ------ //
    async addToBasket(req,res,next){
        const user = req.user
        console.log(user)
        const {deviceId} = req.body
        const basket = await BasketDevice.create({basketId : user.id, deviceId : deviceId})
        return res.json(basket)
    }

    async getBasketUser(req,res){
        const {id} = req.user
        const basket = await BasketDevice.findAll({include: {
                model: Device
            }, where: {basketId: id}})

        return res.json(basket)
    }
}

module.exports = new BasketController()