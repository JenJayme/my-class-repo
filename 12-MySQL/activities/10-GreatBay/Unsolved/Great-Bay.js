var mysql = require("mysql");
var inquirer = require('inquirer');
var fs = require('fs');

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "greatBayDB"
  });

  // connect to the mysql server and sql database
  connection.connect(function(err) {
    if (err) { throw err }
    // run the start function after the connection is made to prompt the user
    initialPrompt();
  });

//FUNCTION TO RUN FIRST QUESTION
function initialPrompt () {
    inquirer
    .prompt({
        message: 'Would you like to post an item or bid on an item?',
        type: 'list',
        name: 'postOrBid',
        choices: ['POST','BID']
})
    .then(function(response) {
        // based on their answer, either call the bid or the post functions
        if (response.postOrBid.toUpperCase() === "POST") {
            postItem();
          }
          else {
            bid();
          }
    });
}

//OBJECT TO HOLD DATA FOR EACH ITEM, AND ARRAY TO HOLD ALL ITEMS
var itemData = {};
var allItemsArr = [];

//BOOLEAN FLAG TO DETERMINE WHETHER TO RUN QUESTIONS AGAIN
var addMore;

//POSTITEM FUNCTION THAT ASKS QUESTIONS ABOUT THE ITEM
function postItem () {
    inquirer.prompt(postQuestions).then((response) => {
        itemData = response;
        itemData.name = response.name,
        itemData.starting_bid = response.starting_bid,
        console.log('Adding item: ' + itemData);
        addItem(itemData);
        initialPrompt();
    })
 }


function addItem(itemData) {
    console.log("Adding a new item...\n");
    var query = connection.query(
        "INSERT INTO itemsTbl SET ?",
        {
            name: itemData.name,
            starting_bid: parseInt(itemData.starting_bid),
        },
        function (err, res) {
            console.log(res.affectedRows + " item added to MySql!\n");
        }
    );
    // logs the query being run
    console.log(query.sql);
}

//BIDAUCTION FUNCTION



//ASK USER THESE QUESTIONS TO GATHER ITEM DATA FOR POSTING
let postQuestions = [
    {
        message: 'What item would you like to post?',
        type: 'input',
        name: 'name'
    }, {
        message: 'Name your lowest acceptable price:',
        type: 'input',
        name: 'starting_bid'
    }
]

//FUNCTION TO PROMPT FOR QUESTIONS WHEN POSTING, AND ASSIGN ANSWERS TO AN ITEM DATA OBJECT

//ASK USER THESE QUESTIONS TO GATHER THEIR BID INFO
let bidQuestions = [
    {
        message: 'What item would you like to bid on?',
        type: 'list',
        name: 'item',
        choices: [allItemsArr]
    },
    {
        message: 'Please enter your bid: ',
        type: 'input',
        name: 'bid',
    }
]

//FUNCTION TO GATHER BID INFORMATION FROM A BIDDER
function bid () {
    connection.query("SELECT * FRON itemsTbl", function(err, results) {
        if (err) throw err;
    inquirer.prompt(bidQuestions).then((response) => {
//jerome did this part differently - see screenshot
        bidData = response;
        bidData.item = response.item,
        bidData.bid = response.bid,
        console.log(`Comparing your bid of ${bidData.bid} to the highest bid.`)
        compareBid(bidData.bid)
    })
}

//FUNCTION TO COMPARE BIDS TO HIGHEST BID
function compareBid (bid, highest_bid) {
    if (bid < highest_bid) {
        console.log("Sorry, there is another bid higher than yours.").then(bidAgain())
        //TODO: WRITE/FINISH BIDAGAIN FUNCTION
    } else if (bid === highest_bid) {
        console.log("Sorry, we've already received another bid of the same amount.").then(bidAgain())
    } else {
        console.log('Congratulations!  You are currently the high bidder!');
        //TODO: WRITE FUNCTION TO REPLACE EXISTING HIGHEST BID WITH THIS ONE
    }
}

function bidAgain () {
    inquirer.prompt(bidQuestions).then(bid())
}

//================================================
