const inquirer = require("inquirer");

class Letter {
    constructor(correctLtr,isGuessed,ltrGuess)
    {
        this.correctLtr = correctLtr;
        this.isGuessed = isGuessed;
        this.ltrGuess = ltrGuess;
    }

    //define a method takes input character 'a' as argument and checks it against underlying character, and updates isGuessed boolean to true if correct
    guessChecker (a) {
        if (a.toLowerCase === correctLtr.toLowerCase) {
            this.isGuessed = True;
        } else {
            this.isGuessed = False;
        }
    }

}



class Shape {
    constructor(area, perimeter) {
      this.area = area;
      this.perimeter = perimeter;
      this.example = "I am in the Shape";
    }
  
    printInfo() {
      for (var key in this) {
        console.log(`${key}: ${this[key]}`);
      }
    }
  }
  
  module.exports = Shape;

// Letter.js: Contains a class, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

// A string value to store the underlying character for the letter

// A boolean value that stores whether that letter has been guessed yet

// A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
