// Add a flag for the text attribute to prevent this field from being null

// Add a validation for the text attribute to make sure it's at least one character,
// but no more than 140 characters

// Add a flag for complete so that it's false by default if not given a value

module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define("Todo", {
    text: DataTypes.STRING,
<<<<<<< HEAD
    complete: DataTypes.BOOLEAN,
    validate: {
      notNull: true
    }
=======
    complete: DataTypes.BOOLEAN
>>>>>>> ba21d6bb2f6501ae523f53157e141ce645b08f58
  });
  return Todo;
};
