const userModel = require('../model/user-model'); 
const bcrypt = require('bcrypt');
const saltRounds=10; //any 2 digit
const userDAO = {
    
    createuser: async(payload)=>{ // {name:'sbi', address:'bangalore'}
    payload.password=await bcrypt.hash(payload.password, saltRounds)

    console.log("inside user dao",payload);
    return new userModel({
            name: payload.name,
            password: payload.password,
            address: payload.address,
            email: payload.email,
            bank:payload.bank,
            phone: payload.phone
        }).save();
    },
    ifExist: (phone)=>{
        return userModel.findOne({phone:phone});
    },
    getByCondition:(condition)=>{
        return userModel.findOne(condition);
    }
}
module.exports = userDAO;