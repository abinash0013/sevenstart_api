const mysql = require("mysql2");

//:::::::::::::::::::::::::::::::: for production
// var con = mysql.createConnection(process.env.MYSQL_URL);

//:::::::::::::::::::::::::::::::: for local
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tambola",
})

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = { con };
