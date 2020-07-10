
function fizzBuzz(n) {
// ===================== YOUR WORK HERE =====================
var numArray = [];
for (let i = n; i > 0; i--) {
    numArray.push[i];
}
numArray.reverse();

console.log("numArray is originally " + numArray);

for (let i = 0; i < numArray.length; i++) {
    if numArray[i] % 3 === 0 && numArray[i] % 5 === 0) {
        console.log('fizzbuzz')
    } else if (numArray[i] % 3 === 0) {
            console.log('fizz')
        } else (numArray[i] % 5 === 0) {
            console.log('buzz');
        }
    }
}



// ==========================================================
  


fizzBuzz(/*Pass an argument from the command line*/)

