const express = require('express');
const router = express.Router();
const bankService = require('../service/bank-service');
const authentication = require('../middleware/authentication');
router.post('/create' ,authentication,function (req, res) {// localhost:3000/bank/create
    
    try{
        let bodyData = req.body;
    bankService.createBank(bodyData).then((result)=>{
        res.status(200).send(result);
    }).catch(error=>{
        res.status(500).send(error);
    })
}catch(error){
    res.status(406).send(error);
}
  });

module.exports = router;

