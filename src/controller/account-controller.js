const express = require('express');
const authentication = require('../middleware/authentication');
const router = express.Router();
const accountService = require('../service/account-service');


router.post('/create', function (req, res) {// localhost:3000/bank/create
    let bodyData = req.body;
    console.log("index",bodyData)
    accountService.createAccount(bodyData).then((result)=>{
        res.status(200).send(result);
    }).catch(error=>{
        res.status(500).send(error);
    })
  })
  
  //DEPOSIT API
  router.put('/deposit',authentication, function (req, res) {// http://localhost:3000/account/deposit
    let bodyData = req.body;
    let userId=req.user._id;
    //console.log("index",bodyData)
    console.log('inside controller',bodyData,userId);
    accountService.depositAccount(userId,bodyData).then((result)=>{
        res.status(200).send(result);
    }).catch(error=>{
        res.status(500).send(error);
    })
  })

   //WITHDRAW API
   router.put('/withdraw',authentication, function (req, res) {// http://localhost:3000/account/withdraw
    let bodyData = req.body;
    let userId=req.user._id;
    //console.log("index",bodyData)
    console.log('inside controller',bodyData,userId);
    accountService.withdrawAccount(userId,bodyData).then((result)=>{
        res.status(200).send(result);
    }).catch(error=>{
        res.status(500).send(error);
    })
  })
  //balance enquiry
  router.get('/balanceEnquire',authentication, function (req, res) {// localhost:3000/bank/create
    let userId=req.user._id;
    console.log("balanceEnquire")
    accountService.balanceEnquire(userId).then((result)=>{
        res.status(200).send(result);
    }).catch(error=>{
        res.status(500).send(error);
    })
  })

  //MINI Statement
  router.get('/ministatement',authentication, function (req, res) {// localhost:3000/bank/create
    let userId=req.user._id;
    console.log("ministatement")
    accountService.ministatement(userId).then((result)=>{
        res.status(200).send(result);
    }).catch(error=>{
        res.status(500).send(error);
    })
  })

module.exports = router;
