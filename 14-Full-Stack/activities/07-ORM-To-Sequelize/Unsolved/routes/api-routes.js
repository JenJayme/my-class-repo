// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// grab the orm from the config
// (remember: connection.js -> orm.js -> route file)
var orm = require("../config/orm.js");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/todos", function(req, res) {
<<<<<<< HEAD
    db.getTodos(function(results) {
=======
    orm.getTodos(function(results) {
>>>>>>> ba21d6bb2f6501ae523f53157e141ce645b08f58
      res.json(results);
    });
  });

  // POST route for saving a new todo. We can create a todo using the data on req.body
  app.post("/api/todos", function(req, res) {
<<<<<<< HEAD
    db.addTodo(req.body, function(results) {
=======
    orm.addTodo(req.body, function(results) {
>>>>>>> ba21d6bb2f6501ae523f53157e141ce645b08f58
      res.json(results);
    });
  });

  // DELETE route for deleting todos. We can access the ID of the todo to delete in
  // req.params.id
  app.delete("/api/todos/:id", function(req, res) {
<<<<<<< HEAD
    db.deleteTodo(req.params.id, function(results) {
=======
    orm.deleteTodo(req.params.id, function(results) {
>>>>>>> ba21d6bb2f6501ae523f53157e141ce645b08f58
      res.json(results);
    });
  });

  // PUT route for updating todos. We can access the updated todo in req.body
  app.put("/api/todos", function(req, res) {
<<<<<<< HEAD
    db.editTodo(req.body, function(results) {
=======
    orm.editTodo(req.body, function(results) {
>>>>>>> ba21d6bb2f6501ae523f53157e141ce645b08f58
      res.json(results);
    });
  });
};
