//01-Remove Duplicates
//What: i would iterate through the array, check each item in the array against a new array which I initially set as empty, and if the new array does not include that item, push it to the new array.
//How: so I'd use a for-loop, with an if else statement, and the includes and push functions.
//Why: To determine if the item exists more than once you have to compare it to something, the new array enables you to do that.
//use Jen's includes method, Chris used Splice

//02-Reverse a String
//What: I can see two ways to do this. Option 1: I would create a new string that includes all of the items from string one, then use the reverse function on it.  Or I could use a for-loop to push the last item in the array into the new array.
//How: With the reverse function and a new array, or with a for-loop.  
//If needed to do wit                                                                                                             hout a new array, I'd use the reverse function. 
//Test apple
//Either approach could work. Chris' method adds the split to array.

//03-Common Characters
//I would iterate through the array using the includes function and if s2 includes the item, and the new array does not include the item, push it to the new array.  This could also be done with equals in a nested for-loop rather than includes, ie if the item in string 2 = item in string one, iterate through new array to check if the item = any items there.
//Chris' solve: elim dups first, then compare both arrays and if b includes item from a, push to new array. 

//04-Compressed String
//I would use a for-loop to iterate through the array and create a new array of objects with two key value pairs - the item, and the number of times it occurs.  Then I'd push each key value pair into a new output string.  Maybe it's possible to do that without objects - just push the item and the number of times it occurs into a new array.
//Chris' solve creates a new array with dups removed, then compare with original array, each time it matches increment by one.  

//05-filter
//two functions and a string
//I would write the status check function first.  I'd use a for each loop to iterate through the array, checking to see if the string is equal to the value of status key.  If yes, the filter function would push the key value pair into a new array.

var input = '';
var newArray = [];

var controlGroup = [ {
    name: kittens,
    status: sleepy
}, {
    name: cat,
    status: hungry
}, {
    name: dog,
    status: happy
}, {
    name: cow,
    status: hungry
} ];

function filter(object){
    newArray.push(object)
}

function statusCheck(input) {
    for (var i = 0; i<controlGroup.length; i++) {
        if (input === controlGroup[i].status) {
            filter(controlGroup[i])
        }
    }
}

console.log("New Array :" + newArray);