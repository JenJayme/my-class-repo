// constructor function used to create programmers objects
// * Each character created using your constructor should have the following properties...
//   * Name: The character's name --> String
//   * Profession: What the character does for a living --> String
//   * Age: The character's age --> Number
//   * Strength: Abstraction for how strong the character is --> Number
//   * HitPoints (HP): Abstraction for how much health the character has --> Number
//   * PrintStats: Function which prints all of a character's properties to the screen

function Character(name, profession, age, strength, hp) {
    this.name = name;
    this.profession = profession;
    this.age = age;
    this.strength = strength;
    this.hp = hp;
  } 

// Once you have created your constructor, create two new characters and print their properties to the screen

  var gio = new Character("Gio", "Kingslayer", 43, 10, 50);
  var jen = new Character("Jen", "Mother of Dragons", 50, 5, 70);

//   console.log("Gio: " + gio);
//   console.log("Jen: " + jen);

Character.prototype.printInfo = function() {
    console.log("Name: " + this.name + "\nProfession: " + this.profession +"\nAge: " + this.age + "\nStrength: " + this.strength + "\nHit Points: " + this.hp +"\nLog Info " + this.logInfo)
  };

Character.prototype.logInfo = function LogInfo() {
    console.log(`${this.name} has ${this.hp} hit points and ${this.strength} strength`);
};

// Character.logInfoFct = new LogInfo();

gio.printInfo();

console.log("----");

jen.printInfo();

console.log("----");

gio.logInfo();

console.log("----");

jen.logInfo();

console.log("----");