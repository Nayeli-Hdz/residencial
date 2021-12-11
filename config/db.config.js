const mysql = require('mysql');

// create here mysql conncetion
const dbConn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: '',
    database:'residencial'
});

dbConn.connect(function(error){
    if(error) throw error;
    console.log('Database Connected Successfully!!');
})

module.exports = dbConn;
