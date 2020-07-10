const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

//our attempt
async function combineAnimals() {
  try {
  const catString = await readFileAsync('cat.json', 'utf-8');
  
  console.log(catString);
  const dogString = await readFileAsync('dog.json', 'utf-8');
  console.log(dogString);
  const fishString = await readFileAsync('goldfish.json', 'utf-8');
  console.log(fishString);
  const hamString = await readFileAsync('hamster.json', 'utf-8');
  console.log(hamString);

  const animalJSON  [catString, fishString, hamString, catString].map(JSON.parse);

await writeFileAsyn

  } catch(err) {

  }
}

combineAnimals();




//from 37
getMovie();

async function getMovie() {
  try {
    const { movie } = await inquirer.prompt({
      message: "Search a movie:",
      name: "movie"
    });

    const { data } = await axios.get(
      `https://www.omdbapi.com/?t=${movie}&apikey=trilogy`
    );

    console.log(data);
  
  } catch (err) {
    console.log(err);
  }
}

