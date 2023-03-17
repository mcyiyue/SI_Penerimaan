const config = require('../config/db')
const mysql = require('mysql')
const pool = mysql.createPool(config)

pool.on('error',(err)=> {
    console.error(err)
})

const executeQuery = (qry, {bank='', firstDate='', secondDate=''}, res) => {
    pool.getConnection(function(err, connection) {
        if (err) throw err
        connection.query(qry, ['%'+bank, firstDate, secondDate], function (error, results) {
            if(error) throw error
            res.send(results)
            connection.release()
        })
    })
}

module.exports={
    executeQuery
}