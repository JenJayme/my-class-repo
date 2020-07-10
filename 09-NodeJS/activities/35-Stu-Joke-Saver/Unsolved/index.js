const fs = require("fs");
const util = require("util");
const axios = require("axios");

const appendFileAsync = util.promisify(fs.appendFile);
const readFileAsync = util.promisify(fs.readFile);

const config = { headers: { accept: "application/json" } };

axios.get("https://icanhazdadjoke.com/", config)
  .then(function (res) {
    fs.appendFileAsync('jokes.txt', joke + "\n").then(function() {
      readFileAsync('jokes.txt', "utf8").then(function(data) {
        console.log("Saved dad jokes:");        
        console.log(data)
      })
    }) res.data.joke, function () {
        if (err) throw err;
    });
  });
    // console.log(res.data.joke);
  });

  .catch(function(err) {
    console.log(err);
  });

  //this also worked, seems to be same as .catch(function(err)
  // fs.readFile('/etc/passwd', (err, data) => {
  //   if (err) throw err;
  //   console.log(data);
  // });
