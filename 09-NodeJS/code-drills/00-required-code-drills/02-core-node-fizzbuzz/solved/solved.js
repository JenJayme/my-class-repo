
function fizzBuzz(n) {
  var allNums = []
  for (let i = n ; i > 0 ; i--) {
    allNums.push(i);
  }
  allNums.reverse();

  for (let i = 0 ; i < allNums.length ; i ++) {
    console.log(allNums[i])
    if (allNums[i] % 3 === 0 && allNums[i] % 5 === 0) {
      console.log("fizzbuzz")
    } else if (allNums[i] % 5 === 0) {
      console.log("buzz")
    } else (allNums[i] % 3 === 0) {
      console.log("fizz")
    }
  }
}

fizzBuzz(process.argv[2])
