const mysql = require('mysql');

// la conexión a la base de datos 
const dbConn = mysql.createConnection({
    host:'database-1.cd0ithle1pfb.us-east-1.rds.amazonaws.com',
    user:'admin',
    password: 'xvP5&$cr0R3o',
    database:'residencial',
});

dbConn.connect(function(error){
    if(error) throw error;
    console.log('Database Connected Successfully!!');
})

module.exports = dbConn;
