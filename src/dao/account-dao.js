const accountModel = require('../model/account-model');
const transactionDAO = require('./transaction-dao');

const accountDAO = {
    createAccount: (payload) => { // {name:'sbi', address:'bangalore'}
        console.log("index inside dao", payload)
        return new accountModel({
            type: payload.type,
            number: payload.number,
            bank: payload.bank,
            user: payload.user,
            balance: payload.balance
        }).save();
    },
    depositAccount: async (userId, payload) => { // {name:'sbi', address:'bangalore'}
        console.log('inside acc-dao', payload, userId);

        try {
            let accountDetail = await accountModel.findOne({ user: userId });
            console.log('inside accountDetail', accountDetail);

            let balance = accountDetail.balance ? accountDetail.balance : 0;

            let totalAmount = balance + payload.amount;
            let result = await accountModel.updateOne({ _id: payload.accountId, user: userId }, { $set: { balance: totalAmount } });
            console.log(result);
            if (result.nModified) {
                let transactionPayload = {
                    amount: payload.amount,
                    deposit: true,
                    balance: totalAmount,
                    user: userId,
                    account: payload.accountId
                }
                await transactionDAO.createTransaction(transactionPayload);
            }
            return { deposit: 'successfully' };
        } catch (error) {
            return error;

        }
    },

    withdrawAccount: async (userId, payload) => { // {name:'sbi', address:'bangalore'}
        console.log('inside acc-dao', payload, userId);

        try {
            let accountDetail = await accountModel.findOne({ user: userId });
            console.log('inside accountDetail', accountDetail);

            let balance = accountDetail.balance ? accountDetail.balance : 0;
            console.log('inside accountDetail balance before check', balance);

            if (balance < payload.amount) {
                console.log('inside accountDetail balance after check', balance);

                return 'insufficient balance';
            }
            console.log('inside accountDetail balance', balance);
            let totalAmount = balance - payload.amount;
            console.log('total amount', totalAmount);
            console.log('condition ', { _id: payload.accountId, user: userId })
            let result = await accountModel.updateOne({ _id: payload.accountId, user: userId }, { $set: { balance: totalAmount } });
            console.log(result);
            if (result.nModified) {
                let transactionPayload = {
                    amount: payload.amount,
                    withdraw: true,
                    balance: totalAmount,
                    user: userId,
                    account: payload.accountId
                }
                await transactionDAO.createTransaction(transactionPayload);
                return { withdraw: 'successfully' };
            }

        } catch (error) {
            return error;

        }
    },


    balanceEnquire: (userId) => {
        return accountModel.findOne({ user: userId }, { _id: 0, balance: 1 });
        //line 86 findOne({user:userId} will use for any fetching the data

    },

    ministatement: (userId) => {
        return accountModel.find({ user: transactions }, { _id: 0, transactions: 1 });
        //line 86 findOne({user:userId} will use for any fetching the data

    }


}


module.exports = accountDAO;