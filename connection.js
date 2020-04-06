const mysql = require('mysql');

//create the mysql connection object.  
var con = mysql.createPool({
    connectionLimit: 100,
    user: "msegal",
    password: "789164",
    database: "Jbox",
    host: "35.188.20.36",
});

con.getConnection(function(err) {
  if (err) throw err;
});

module.exports = con;