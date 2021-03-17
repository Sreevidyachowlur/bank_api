const utils = {
    getUniqueId: ()=>{
       return   'USER -' + Math.floor(1000 + Math.random() * 9000);

    }
}

module.exports = utils;



