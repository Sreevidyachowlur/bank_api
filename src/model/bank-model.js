const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const constant = require('../utils/constant');
const BankSchema = new Schema({ //602e7c15a250bf65a0874b53
  name: {
      type:String,
      required: true
  },
  address: {
    type:String,
    required: true
},
  branch: {
    type:String,
    required: true
},
  phone: {
    type:Number,
    required: true
},
});
module.exports = mongoose.model(constant.MODEL.BANK, BankSchema);