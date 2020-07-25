var mysql = require("mysql");
var inquirer = require("inquirer");
// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "password",
  database: "top_songsDB"
});
// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});
function start() {
    connection.query("SELECT * FROM top5000", function(err, results){
        if(err) throw err;
    })
    inquirer
      .prompt({
        name: "findSong",
        type: "rawlist",
        message: "What song do you want to find?",
        choices: function () {
            var choiceArray = [];
            for(var i=0; i<results.length; i++){
                choiceArray.push(results[i].song) 
            }
            return choiceArray;
        }
      })
      .then(function(results) {
          var chosenSong;
          for(var i =0; i<= results.length;i++){
              if(results[i].song===chosenSong){
                  chosenSong === results[i];
              }
          }
        // based on their answer, either call the bid or the post functions
        console.log(chosenSong);
      });
  }