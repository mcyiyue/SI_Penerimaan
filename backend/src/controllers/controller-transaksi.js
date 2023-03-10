const Transaksi=require('../models/Transaksi')
const {executeQuery}=require('./executeQuery')

const transaksi = new Transaksi()

module.exports = {
    getDataTransaksi(req, res){
        executeQuery(transaksi.getDataTransaksiQuery,req.body, res)
    },
    getDataBKU(req, res){
        executeQuery(transaksi.getDataBKUQuery,req.body, res)
    },
    getLastTotal(req, res){
        executeQuery(transaksi.getLastTotalQuery,req.body, res)
    }
}