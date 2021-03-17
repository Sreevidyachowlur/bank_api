const userDAO = require("../dao/user-dao");

const userService={
    createuser:(payload)=>{
        console.log("inside user ser");
        return new Promise(async(resolve,reject)=>{
         let ifExist =   await userDAO.ifExist(payload.phone);
         if(ifExist){
             reject('user already exists');
         }
            userDAO.createuser(payload).then((result)=>{
                resolve(result);
            }).catch((error)=>{
                reject(error);
            })

        })
    }
}
module.exports=userService;