const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'youremail@gmail.com',
      pass: 'yourpassword'
    }
  }); //logged into gamil
  
 
  
  
  
const sendMail = {
    send: ()=>{
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
              return error;
            } else {
                console.log('Email sent: ' + info.response);
           return info.response;
            }

          });
    }
}
module.exports = sendMail;