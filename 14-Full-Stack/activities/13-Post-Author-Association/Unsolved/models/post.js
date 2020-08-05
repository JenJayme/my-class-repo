<<<<<<< HEAD
var Author = require("./author")

=======
>>>>>>> ba21d6bb2f6501ae523f53157e141ce645b08f58
module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
<<<<<<< HEAD
    },
  });

  
  // Add a belongsTo association to Authors here
  Post.belongsTo( Author, { foreignKey: 'Author.id' })

  // Example: https://github.com/sequelize/express-example/blob/master/models/task.js

=======
    }
  });

  // Add a belongsTo association to Authors here
  // Example: https://github.com/sequelize/express-example/blob/master/models/task.js
>>>>>>> ba21d6bb2f6501ae523f53157e141ce645b08f58
  return Post;
};
