const transactionModel = require('../model/transaction-model'); 

const transactionDAO = {
    createTransaction: (payload)=>{ // {name:'sbi', address:'bangalore'}
        return new transactionModel({
            date: payload.date,
            amount: payload.amount,
            deposit:payload.deposit,
            withdraw:payload.withdraw,
            balance: payload.balance,
             user:payload.user,
            account: payload.account
        }).save();
    }
}

module.exports = transactionDAO;