const $root = document.querySelector("#root");

let score;
let targetScore;

const makeGuess = function() {
  const $score = document.querySelector("#root p");
  $score.textContent = "Score: " + score + " | " + "Target: " + targetScore;

  if (score > targetScore) {
    alert("You lost this round!");
    playRound();
  } else if (score === targetScore) {
    alert("You won this round!");
    playRound();
  }
};

//constructor function
const Crystal = function(color) {
  //don't use fat arrow here
  this.element = document.createElement("div");
  this.element.className = "crystal " + color;
  this.value = 0;

  this.element.addEventListener(
    //fat arrow can be used here
    "click",
    function() {
      score += this.value;
      makeGuess();
    }.bind(this),
    false
  );
};

Crystal.prototype.render = function(target) {
  this.value = Math.floor(Math.random() * 15) + 1;
  target.appendChild(this.element);
};

var crystals = [new Crystal("red"), new Crystal("blue"), new Crystal("green")];

const playRound = function() {
  //can use fat arrow here
  var fragment = document.createDocumentFragment();
  var $score = document.createElement("p");
  targetScore = Math.floor(Math.random() * 50) + 25;
  score = 0;
  $score.textContent = "Score: " + score + " | " + "Target: " + targetScore;
  crystals
  //fat arrow can be used here
    .sort(function() {
      return 0.5 - Math.random();
    })
    .forEach(function(crystal) {
      crystal.render(fragment);
    });
  fragment.appendChild($score);
  $root.innerHTML = "";
  $root.appendChild(fragment);
};

playRound();
