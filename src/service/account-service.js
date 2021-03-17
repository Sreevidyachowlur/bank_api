const accountDAO = require('../dao/account-dao');
const userDAO = require('../dao/user-dao');
const utils = require('../utils/utilities')
const accountService ={
    createAccount:(payload)=>{
        console.log("index inside service",payload)
        payload["number"] = "ACC-" + utils.getUniqueId();
        return new Promise((resolve,reject)=>{
            accountDAO.createAccount(payload).then((result)=>{
                resolve(result);
            }).catch(error=>{
                reject(error);
            })
        })
    },
    depositAccount:(userId,payload)=>{
        console.log('inside ac-service',payload,userId);
        return new Promise((resolve,reject)=>{
            accountDAO.depositAccount(userId,payload).then((result)=>{
                resolve(result);
            }).catch(error=>{
                reject(error);
            });
        });
        },

    withdrawAccount:(userId,payload)=>{
        console.log('inside ac-service',payload,userId);
        return new Promise((resolve,reject)=>{
            accountDAO.withdrawAccount(userId,payload).then((result)=>{
                    resolve(result);
                }).catch(error=>{
                    reject(error);
                });
            });
            },
    balanceEnquire:(userId)=>{
        console.log('inside service');
        return new Promise((resolve,reject)=>{
        accountDAO.balanceEnquire(userId).then((result)=>{
           resolve(result); 
        }).catch(error=>{
            reject(error);
        });
    });
    },

    ministatement:(userId)=>{
        console.log('inside service ministatement');
        return new Promise((resolve,reject)=>{
        accountDAO.ministatement(userId).then((result)=>{
           resolve(result); 
        }).catch(error=>{
            reject(error);
        });
    });
    }

            
    }


module.exports = accountService;

