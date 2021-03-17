const bankDAO = require('../dao/bank-dao');
const bankService ={
    createBank:(payload)=>{
        return new Promise((resolve,reject)=>{
            bankDAO.createBank(payload).then((result)=>{
                resolve(result);
            }).catch(error=>{
                reject(error);
            })
        })
    }
}

module.exports = bankService;


