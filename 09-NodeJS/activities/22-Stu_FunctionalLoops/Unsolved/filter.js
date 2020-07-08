const originalArray = [1, 3, 2, 5, 10];

const evenNumbers = originalArray.filter(function(data) {
  if (data % 2 === 0) {
    return true;
  }
});

console.log(evenNumbers);
console.log(originalArray);

// const isPrime = num => {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) return false;
//   }
//   return num !== 1;
// };

//rewrite

// Complete the following

// 1. A filter that runs through the original array and creates a new array containing only its prime numbers (`primeArray`)
// Use the isPrime function provided to help with this
//SYNTAX:
//array.filter(function(currentValue, index, arr), thisValue)
const isPrime = originalArray.filter(num => {
  if (data % 2 === 0 {
    return true;
}
return num !== 1;
  };

//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) return false;
//   }
//   return num !== 1;
// };

const primeNums = originalArray.filter(isPrime);

// 2. A filter that runs through the original array and creates a new array containing only its numbers larger than 5(`moreThan5Array`)

// Your code here
const moreThan5Array = originalArray.filder(num => num > 5);

// Bonus: Use arrow functions as callbacks!
