const mysql = require("mysql");

//CREATE CONNECTION
var connection = mysql.createConnection({
    host: "localhost",

    // Specify Port
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "dundermifflinDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    afterConnection();
});

//AFTER CONNECTION, PRINT ALL ITEMS IN TABLE
function afterConnection() {
    connection.query("SELECT * FROM dundermifflinDB", function(err, res) {
      if (err) throw err;
      console.log('So far, so good...');
      console.table(dundermifflinDB);
      connection.end();
    });
  }