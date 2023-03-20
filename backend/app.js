const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

const {
    routerUsers,
    routerBank,
    routerTransaksi
} = require('./src/routes')
app.use('/', routerBank)
app.use('/', routerTransaksi)
app.use('/', routerUsers)

app.listen(8080)