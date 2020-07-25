// Dependencies
var express = require("express");
var mysql = require("mysql");

// Create express app instance.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 3000;

// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "AvatarDB"
});

// Initiate MySQL Connection.
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

  // Routes
app.get("/", function(req, res) {

    // If the main route is hit, then we initiate a SQL query to grab all records.
    // All of the resulting records are stored in the variable "result."
    connection.query("SELECT * FROM  CharactersTb", function(err, result) {
      if (err) throw err;
      // We then begin building out HTML elements for the page.
      var html = "<h1> Avatar last airbender </h1>";
  
      // Here we begin an unordered list.
      html += "<ul>";
  
      // We then use the retrieved records from the database to populate our HTML file.
      for (var i = 0; i < result.length; i++) {
        html += "<li><p> ID: " + result[i].id + "</p>";
        html += "<p>Name: " + result[i].name + " </p></li>";
        html += "<p>Coolness Point: " + result[i].coolness_point + " </p></li>";
        html += "<p>Attitude: " + result[i].attitude + " </p></li>";
        html += "<p>Power: " + result[i].power + " </p></li>";
      }
  
      // We close our unordered list.
      html += "</ul>";
      html += '<a href="/coolness-chart\">Going to coolness page</a>';
  
      // Finally we send the user the HTML file we dynamically created.
      res.send(html);
    });
  });

  app.get("/coolness-chart", function(req, res) {

    // If the main route is hit, then we initiate a SQL query to grab all records.
    // All of the resulting records are stored in the variable "result."
    connection.query("SELECT * FROM  CharactersTb ORDER BY coolness_point DESC", function(err, result) {
      if (err) throw err;
      // We then begin building out HTML elements for the page.
      var html = "<h1> Avatar last airbender BY Coolness points </h1>";
  
      // Here we begin an unordered list.
      html += "<ul>";
  
      // We then use the retrieved records from the database to populate our HTML file.
      for (var i = 0; i < result.length; i++) {
        html += "<p><strong>Coolness Point: " + result[i].coolness_point + "</strong> </p></li>";
        html += "<li><p> ID: " + result[i].id + "</p>";
        html += "<p>Name: " + result[i].name + " </p></li>";
        html += "<p>Attitude: " + result[i].attitude + " </p></li>";
        html += "<p>Power: " + result[i].power + " </p></li>";
      }
  
      // We close our unordered list.
      html += "</ul>";
  
      // Finally we send the user the HTML file we dynamically created.
      res.send(html);
    });
  });

  app.get("/attitude-chart/:attitude", function(req, res) {
      var attitude = req.params.attitude;

    // If the main route is hit, then we initiate a SQL query to grab all records.
    // All of the resulting records are stored in the variable "result."
    connection.query('SELECT * FROM  CharactersTb WHERE attitude ${attitude}', function(err, result) {
      if (err) throw err;
      // We then begin building out HTML elements for the page.
      var html = "<h1> Avatar last airbender BY Attitude Chart </h1>";
  
      // Here we begin an unordered list.
      html += "<ul>";
  
      // We then use the retrieved records from the database to populate our HTML file.
      for (var i = 0; i < result.length; i++) {
        html += "<p><strong>Coolness Point: " + result[i].coolness_point + "</strong> </p></li>";
        html += "<li><p> ID: " + result[i].id + "</p>";
        html += "<p>Name: " + result[i].name + " </p></li>";
        html += "<p>Attitude: " + result[i].attitude + " </p></li>";
        html += "<p>Power: " + result[i].power + " </p></li>";
      }
  
      // We close our unordered list.
      html += "</ul>";
  
      // Finally we send the user the HTML file we dynamically created.
      res.send(html);
    });
  });
  
  // Start our server so that it can begin listening to client requests.
  app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });