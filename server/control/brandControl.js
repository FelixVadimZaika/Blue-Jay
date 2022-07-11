const {Brand, Type} = require('../models/models')
const ErrorApi = require('../error/ErrorApi');
class BrandControl {
    async create(req,res){
        const {name} = req.body
        const brand = await Brand.create({name})
        return res.json(brand)
    }
    async getAll(req,res){
        const brands = await Brand.findAll()
        return res.json(brands)

    }

}

module.exports = new BrandControl()