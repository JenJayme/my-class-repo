// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var cat = {
  all: function(cb) {
<<<<<<< HEAD
    orm.all("cats", function (res) {
=======
    orm.all("cats", function(res) {
>>>>>>> ba21d6bb2f6501ae523f53157e141ce645b08f58
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
<<<<<<< HEAD
    orm.create("cats", cols, vals, function (res) {
=======
    orm.create("cats", cols, vals, function(res) {
>>>>>>> ba21d6bb2f6501ae523f53157e141ce645b08f58
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
<<<<<<< HEAD
    orm.update("cats", objColVals, condition, function (res) {
=======
    orm.update("cats", objColVals, condition, function(res) {
>>>>>>> ba21d6bb2f6501ae523f53157e141ce645b08f58
      cb(res);
    });
  },
  delete: function(condition, cb) {
<<<<<<< HEAD
    orm.delete("cats", condition, function (res) {
=======
    orm.delete("cats", condition, function(res) {
>>>>>>> ba21d6bb2f6501ae523f53157e141ce645b08f58
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = cat;
