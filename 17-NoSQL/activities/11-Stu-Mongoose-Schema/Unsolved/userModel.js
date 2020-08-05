const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  // CODE HERE
  // * In `userModel.js` add four attributes to your schema.
  //   * username: A string that will be be required, and also trimmed.
  username: {
    type: String,
    trim: true,
    required: "String is Required"
  },

  password: {
    type: String,
    trim: true,
    validate: [({ length }) => length >= 6, "Password needs to be at least 6 characters"]
  }, 

  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    unique: true
  },
  date: {
    type: Date,
    default: Date.now
  }

});

const User = mongoose.model("User", UserSchema);

module.exports = User;



// * In `userModel.js` add four attributes to your schema.

//   * username: A string that will be be required, and also trimmed.

//   * password: A string that will be required, trimmed, and at least 6 characters.

//   * email: A string that must be a valid email address and unique in our collection.

//   * userCreated: A date that will default to the current date.