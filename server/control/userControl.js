const ErrorApi = require('../error/ErrorApi');
class UserControl {
    async registration(req,res){

    }
    async login(req,res){

    }
    async check(req,res,next){
        const {id} = req.query
        if (!id){
           return next(ErrorApi.badRequest('не задан ID'))
        }
        res.json(id)
    }
}
module.exports = new UserControl()