const ErrorApi = require('../error/ErrorApi');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User,Basket} = require('../models/models')
const generateJwt = (id,email,role)=>{
    return jwt.sign({id, email,role},
        process.env.SECRET_KEY,
        {expiresIn:'24h'}
    )
}
class UserControl {
    async registration(req,res){
        const{email,password,role} = req.body
        if(!email || !password){
            return next(ErrorApi.badRequest('Некоректний email або password'))
        }
        const candidate = await User.findOne({where:{email}}) //перевірка чи є такий email
        if(candidate){
            return next(ErrorApi.badRequest('Користувач з таким email вже існує'))
        }
        const hashPassword = await bcrypt.hash(password,5)
        const user = await User.create({email,role,password:hashPassword})
        const basket = await Basket.create({userId:user.id})
        const token = generateJwt(user.id,user.email,user.role)
        return res.json({token})
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