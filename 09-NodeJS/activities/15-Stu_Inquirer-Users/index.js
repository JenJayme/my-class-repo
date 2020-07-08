var inquirer = require("inquirer");
var fs = require('fs');

inquirer.prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name"
    },
    {
      type: "checkbox",
      message: "What languages do you know?",
      name: "languages",
      choices: [
          'HTML',
          'CSS',
          'Javascript'
        ],
    },
    {
      type: "input",
      message: "What is your preferred method of communication?",
      name: "communication"
    }
  ])
  .then(function(response) {
    console.log(response)
    // var filename = data.name.toLowerCase().split('').join('') + ".json";
    // fs.writeFile("text.JSON.stringify(data, null, '\t'), function(err) {
    //     if (err) {
    //         return console.log(err);
    //     } else {
    //         console.log(text)
    // )
  });

//     if (response.confirm === response.password) {
//       console.log("Success!");
//     }
//     else {
//       console.log("You forgot your password already?!");
//     }
//   });
