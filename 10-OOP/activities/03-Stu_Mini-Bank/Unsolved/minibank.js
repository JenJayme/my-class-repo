function MiniBank(balance) {
  this.balance = balance;
  this.statement = [balance];
  this.getBalance = function () {
    return this.balance;
  };
    this.printBalance = function () {
      console.log(`Balance: ${this.getBalance()}`);
    };
    
}

// Update the `createMiniBank` function to achieve the following:

function createMiniBank() {

}

// 1. Add another private value of `statement` that should be set to an array with one value, `0`. This array will contain all transactions made with the MiniBank objects.

const statement = [0];
let balance = 0;

// 2. Add a `setBalance` function that takes a value and updates the private `statement` value to it.

function setBalance(value) {
  let balance = statement + value;
  console.log("new balance:" + balance)
}

// 3. Write an updateStatement function that takes in a number and pushes it to the statement array.
function updateStatement(number) {
  statement.push(number);
}

// 4. Write a `getStatement` function that returns the `statement` array.
function getStatement() {
  return this.statement.slice(0);
}

//This one is not working right
// 5. Write a `printStatement` function that prints each element in the in the `statement` array on its own line.
function printStatement() {
var statement = getStatement();
  for (var i = 0; i < statement.length; i++) {
    console.log('${i+1}, ${statement[i]}');
  }
}



//CALL FUNCTIONS HERE
// setBalance(20);
updateStatement(42);
getStatement();
printStatement();
// console.log("console log = " statement);