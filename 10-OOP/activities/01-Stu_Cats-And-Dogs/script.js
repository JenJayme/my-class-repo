var dog = {
    raining: true,
    noise: "Woof!",
    makeNoise: function () {
        if (this.raining = true) {
            console.log(this.noise)
        }
    }
}

var cat = {
    raining: false,
    noise: "Meow!",
    makeNoise: function () {
        console.log(this.noise)
    }

}

dog.makeNoise();
cat.makeNoise();

function massHysteria(dog, cat) {
    if (dog.raining === true && cat.raining === true) {
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!")
}

massHysteria();

//constructors
var dogs = new Animal(true,"Woof")
