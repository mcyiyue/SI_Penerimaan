const express = require('express')
const session = require('express-session')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie:{
        secure: 'auto'
    }
}))
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))

const {
    routerUsers,
    routerAuth,
    routerBank
} = require('./src/routes')

app.use('/', routerAuth)
app.use('/', routerBank)
app.use('/', routerUsers)

app.listen(process.env.APP_PORT, () => {
    console.log(`Server Up and Running on Port ${process.env.APP_PORT}`)
})