//write a function that accepts a string and a function as arguments, log the string and then the function.
function logRun (string, cb) {
    console.log(string);
    cb();
}

// Write a function that accepts a boolean value and a function as arguments. It should run the function if and only if the boolean argument is true.

function boolRun (boolean, cb) {
    if (boolean === true) {
        cb();
    }
}


// Write a function that accepts a boolean value and a function as arguments. It should run the function if and only if the boolean argument is true.

function runFonV (F, V) {
    var fvResult;
    fvResult = F(V);
    return fvResult;
}

// Write a function that accepts a boolean value and a function as arguments. It should run the function if and only if the boolean argument is true.

function writeMsg (msg) {
    fs.writefile(log.txt, msg)
}

// fs.writeFile(file, data[, options], callback)