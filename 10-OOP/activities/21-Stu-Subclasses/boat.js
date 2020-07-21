const Vehicle = require("./Unsolved/vehicle");

class Boat extends Vehicle {
  constructor(crew) {
    const crew = crew;

    super(id, numberOfWheels, sound);//needs to be handed the area value;
    //super must be called before we try to use the keyword 'this'
    //the super keyword calls the parent constructor function of the subclass
    this.type = boat;//would be 2. 
    this.crew = crew;

  function crewSoundOff() {
      console.log(`${this.crew} is here!`)
  }

  function useHorn() {
      console.log(`${this.sound}!`)
  }

}

var ferry = new Boat(23456, 2, "MeeeOOOO", "Gio");

module.exports = Boat;
