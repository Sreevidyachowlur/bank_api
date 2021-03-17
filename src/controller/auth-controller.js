var express = require('express');
var router = express.Router();
const authService=require('../service/auth-service');
const mail=require('../service/send-mail.service');


router.post('/login',(req,res)=>{
    let bodyData=req.body;
  authService.login(bodyData).then((result)=>{

    //user should get mail

   /* var mailOptions = {
      from: 'youremail@gmail.com',
      to: 'myfriend@yahoo.com',
      subject: 'Sending Email using Node.js',
      text: 'That was easy!'
    };
      mail.send(mailOptions); */
      res.status(200).send(result)
  }).catch((error)=>{
    res.status(500).send(error);
  })  
})

module.exports=router;