


/////////////////////////////5.1///////////////////////////////////////////

// console log "Hello World"

// ---------- code starts here ----------

console.log("Hello World");



// ---------- code ends here ---------- 

/////////////////////////////5.2///////////////////////////////////////////

// next console log the command line arguments when this file is run in node

// ---------- code starts here ---------- 

console.log(process.argv);

//from online exercise 
var myArgs = process.argv.slice(2);
console.log('My args: ' + myArgs);
console.log('My args 2: ' + process.argv.slice(2));

//just practicing
var fs = require('fs')

// ---------- code ends here ---------- 

/////////////////////////////5.3///////////////////////////////////////////

// Console log the first and second command line argument that the user gives this file
// if there is no input it should come back undefined

// ---------- code starts here ---------- 

console.log(process.argv[2]);
console.log(process.argv[3]);

var arg1 = process.argv[2];
var arg2 = process.argv[3];


// ---------- code ends here ---------- 

/////////////////////////////5.4///////////////////////////////////////////

// If the first command line argument given to this file is "minion" and the second argument is "army", console log "I have found Gru"
// If the first command line argument given to this file is "minion" and the second argument is not "army", console log "Still looking for Gru"
// For any other command line arguments, console log "Minion RAGE!"

// ---------- code starts here ---------- 

function Gru(com1, com2) {
var com1 = process.argv[2];
var com2 = process.argv[3];

if (com1 == 'minion' && com2 == 'army') {
    console.log("I have found Gru");
}

else if (com1 == 'minion' && com2 !== 'army') {
    console.log("Still looking for Gru.")
}
else {
    console.log("Minion RAGE!")
}
}

Gru();




// ---------- code ends here ---------- 
