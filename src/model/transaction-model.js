const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const constant = require('../utils/constant');
const transactionSchema = new Schema({
  date: {
    type: String,
    default: Date.now()
  },
  amount: {
    type: Number,
    required: true
  },
  deposit: {
    type: String,
    required: false
  },
  withdraw: {
    type: String,
    required: false
  },
  balance: {
    type: Number,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true
  },
  account: {
    type: Schema.Types.ObjectId,
    ref: 'accounts',
    required: true
  }
});
module.exports = mongoose.model(constant.MODEL.TRANSACTION, transactionSchema);  