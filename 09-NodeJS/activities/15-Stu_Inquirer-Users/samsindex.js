var inquirer = require("inquirer");
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your user name?:",
      name: "name"
    },
    {
      type: "checkbox",
      message: "What languages do you know?:",
      choices: ['English', 'Spanish', 'Mandarin', 'Tagalog'],
      name: "languages"
    },
    {
      type: "input",
      message: "What is your preferred method of communication?:",
      name: "communication"
    }
  ])
  .then(function(response) {
    console.log(response)
  });