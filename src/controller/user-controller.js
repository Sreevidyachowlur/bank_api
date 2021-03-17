var express = require('express')
var router = express.Router()
const userService=require('../service/user-service')



router.post('/create',(req,res)=>{
  console.log("inside user con");
    let bodyData=req.body;
  userService.createuser(bodyData).then((result)=>{
      res.status(200).send(result)
  }).catch((error)=>{
    res.status(500).send(error);
  })  
})

console.log("inside user con");


module.exports=router;