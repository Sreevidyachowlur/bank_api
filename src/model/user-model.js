const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const constant = require('../utils/constant');
const userSchema = new Schema({
  name: {
      type:String,
      required: true
  },
  address: {
    type:String,
    required: true
},
  password: {
    type:String,
    required: true
},
  email: {
    type:String,
    required: true
},
  phone: {
    type:Number,
    required: true
},
  bank: {
    type:Schema.Types.ObjectId,
    ref:'banks' ,
    required: true
  }
});
module.exports = mongoose.model(constant.MODEL.USER, userSchema);