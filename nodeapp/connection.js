const mysql = require('mysql');

const con = mysql.createConnection({
    host: "hospital.cncj0eia72gc.us-east-1.rds.amazonaws.com",
    user: "admin",
    database: "hopital",
    port: "3306",
    password: "123admin",
    connectionLimit: 15,
    queueLimit: 30,
    acquireTimeout: 1000000
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
module.exports=con;