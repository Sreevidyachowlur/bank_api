const bankModel = require('../model/bank-model'); 

const bankDAO = {
    createBank: (payload)=>{ // {name:'sbi', address:'bangalore'}
        return new bankModel({
            name: payload.name,
            address: payload.address,
            branch: payload.branch,
            phone: payload.phone
        }).save();
    }
}

module.exports = bankDAO;