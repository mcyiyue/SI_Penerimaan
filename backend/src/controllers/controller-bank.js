const Bank=require('../models/Bank')
const {executeQuery}=require('./executeQuery')

const bank = new Bank()

module.exports = {
    getDaftarBank(req, res){
        executeQuery(bank.getDataBankQuery,'',res)
    }
}