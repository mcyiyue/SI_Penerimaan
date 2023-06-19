const routerUsers = require('./router-users')
const routerBank = require('./router-bank')
const routerTransaksi = require('./router-transaksi')
const routerAuth = require('./router-auth')
const routerGroup = require('./router-group')
const routerBku = require('./router-bku')

module.exports = {
    routerBank,
    routerAuth,
    routerUsers,
    routerTransaksi,
    routerGroup,
    routerBku
}