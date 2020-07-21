const Child = require("../child");

describe("Child", () => {
    //exports a Child constructor function. The constructor function expects to be provided a name and an age
    // takes in two inputs, string and age

    it("should takes in two inputs, string and age", () => {
        //Arrange
        const name = "Gio";
        const age = 40;

        // Act 
        const obj = new Child(name, age);

        // Assert
        expect(obj.name).toEqual(name);
        expect(obj.age).toEqual(age);

    }
});

// If name is not a string or name is an empty string, an error is thrown.


// If age is not a number, is NaN or is less than 0, an error is thrown.

// Otherwise these values are added to the created instance when the constructor is called.


