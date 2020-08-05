var Author = require("./author")

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
    },
  });

  
  // Add a belongsTo association to Authors here
  Post.belongsTo( Author, { foreignKey: 'Author.id' })

  // Example: https://github.com/sequelize/express-example/blob/master/models/task.js

  return Post;
};
