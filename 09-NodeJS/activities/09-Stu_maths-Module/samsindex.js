//SAM's index.js

var math = require("./math.js");
var operation = process.argv[2];
var numberOne = parseInt(process.argv[3]);
var numberTwo = parseInt(process.argv[4]);
switch (operation) {
    case "sum":
        console.log(math.sum(numberOne, numberTwo));
        break;
    case "difference":
        console.log(math.difference(numberOne, numberTwo));
        break;
    case "product":
        console.log(math.product(numberOne, numberTwo));
        break;
    case "quotient":
        console.log(math.quotient(numberOne, numberTwo));
        break;
    default:
        console.log("error, invalid operation")
}