//You have two options:

// 1. create your own pseudocode and attempt to code it out

var origArr = [2,5,8,9,14,22,24,38,42,56,78]

var minIndex = 0;
var maxIndex = origArr.length - 1;
var target = origArr[Math.floor(Math.random())];

// 2. Use the Hint pseudocode.

while (minIndex < maxIndex) {
    var midIndex = (maxIndex - minIndex) / 2;
    if (origArr[midIndex] === target) {
        console.log('midIndex found:' + midIndex + 'vs target: ' + target)
        break
        } else if 
        (origArr[midIndex] > target) {
            console.log('midIndex > target:' + midIndex)
            minIndex = midIndex
        } else { maxIndex = midIndex;
    console.log ('midIndex not found')
 }
}













