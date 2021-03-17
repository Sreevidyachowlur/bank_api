const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const constant = require('../utils/constant');
const AccountSchema = new Schema({
  type: {
      type:String,
      required: true
  },
  number: {
    type:String,
    required: true,
},
  bank: {
    type:Schema.Types.ObjectId,
    ref:"banks",
    required: true
},
  user: {
    type:Schema.Types.ObjectId,
    ref:"users",
    required: true
  },
  balance:{
   type:Number,
   default:0
   //required:true
  },
  balanceEnquire:{
    type:Number,
    default:0
  }
},
);
module.exports = mongoose.model(constant.MODEL.ACCOUNT, AccountSchema);