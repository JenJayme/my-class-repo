//I am ready!
//Question: Given an array, return true if there is at least one duplicate in the array.  If not, return false.

startingArray = ['orange', 'blue', 'red', 'blue', 'green', 'yellow'];
startingArray2 = ['orange', 'blue', 'red', 'blue', 'green', 'yellow'];

var itemBeingConsidered = '';
var itemCount = 0;
isDuplicate = true;

//What: 
//How: Use a for-loop and a "boolean flag" variable to give you the end answer true or false.
//for loop
function dupChecker () { 
// while itemCount < 2 {
 for (var i = 0; i < startingArray.length; i++) {
     itemBeingConsidered = startingArray[i];
    if (itemBeingConsidered === starting.Array[i]) {
        itemCount = +1 };
    if (itemCount > 1) {
        isDuplicate = true
    }
 }
// }
}

dupChecker();

console.log("Is Duplicate: " + isDuplicate);
console.log("Item Count: " + itemCount);
//if else statement.  if spotlight === 