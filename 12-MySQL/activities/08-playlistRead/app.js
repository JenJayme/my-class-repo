var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3000,
  
  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "playlist_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
});

// * We are going to print playlists to the console based upon the genre or artist.

// * First create code that prints all songs within your database to the terminal.

function afterConnection() {
    connection.query("SELECT * FROM playlist_db", function (err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
    });
}

