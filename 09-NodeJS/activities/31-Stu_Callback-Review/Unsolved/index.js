const fs = require("fs");

fs.readFile("animals.json", "utf8", function(err, data) {
  if (err) {
    throw err;
  }

  // Parse the JSON string to an object
  //this reads the info from the file and treats the info in the file like an array
  const animalJSON = JSON.parse(data);

  // Create two new arrays to contain the cats and dogs objects
  const dogs = [];
  const cats = [];

  //use filter or for each to return it to the dogs and cats arrays.

  // array1.forEach(element => console.log(element));

  animalJSON.forEach(function(animals) { 
    if (animals.species === "cat") {
      cats.push(animals);
    } else if ((animals.species === "dog") {
      dogs.push(animals);
    }
  };