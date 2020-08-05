// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");

// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get("/api/all", function(request,response) {
    var dbQuery = "SELECT * FROM chirps";

    connection.query(dbQuery, function(err,result) {
      if (err) throw err;
      response.json(result);
    });    
  });

  // Add a chirp
  app.post("/api/new", function(request,response) {
    var dbQuery = "INSERT INTO chirps (Author, chirp, created_at) VALUES (?,?,?)";

    connection.query(dbQuery, [req.body.author, req.body.chirp, req.body.created_at], function(err, result) {
      if (err) throw err;
      console.log("Chirp saved successfully!");
      response.end();
    });
  });
};
