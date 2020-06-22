//create event listener that uses input values to calculate the tip
//pointer to calculate tip button
//inputs and where we'll print them 
var calcBtn = document.getElementById("calc-tip")
var mealPrice = document.getElementById("meal-price")
var tipPercent = document.getElementById("tip-percent")
var tipAmount = document.getElementById("tip-amount")
var newTotal = document.getElementById("new-total")

//function to add event listener to calculate button
calcBtn.addEventListener("click", function(event) {
    event.preventDefault();
  
    console.log(event);

//add when enter mealPrice and tip percent, multiplies those to return new total

tipAmount = (mealPrice.value * tipPercent.value)
newTotal = (mealPrice.value + tipAmount.value)

});


  

