const mysql = require("mysql2");

var con = mysql.createConnection(process.env.MYSQL_URL);

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = { con };
