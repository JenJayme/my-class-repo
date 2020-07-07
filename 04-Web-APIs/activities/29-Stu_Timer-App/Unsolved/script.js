var statusSpan = document.querySelector("#status");
var statusToggle = document.querySelector("#status-toggle");
var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");
var stopButton = document.querySelector("#stop");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var workMinutesInput = document.querySelector("#work-minutes");
var restMinutesInput = document.querySelector("#rest-minutes");

var totalSeconds = 0;
var secondsElapsed = 0;
var interval;
var fullMinute;
var minutesLeft;

function startTimer() {
  // Write code to start the timer here
  // get the minutes submitted
  fullMinute--;
  minutesLeft--;
  minutesDisplay.textContent = minutesLeft;
  secondsDisplay =
  interval = setInterval(ourTimer,1000);
}

function ourTimer(){
  secondsDisplay.textContent= fullMinute;
  secondsElapsed++;
  fullMinute--;
  if(fullMinute===0){
    minutesLeft--;
    minutesDisplay.textContent = minutesLeft;
    fullMinute = 59;
  }
  if(totalSeconds===secondsElapsed){
    clearInterval(interval)
  }
}

workMinutesInput.addEventListener("change", function(event){
  event.preventDefault();
  minutesLeft = parseInt(workMinutesInput.value);
  console.log(minutesLeft);
  totalSeconds = (60*(parseInt(workMinutesInput.value)));
  minutesDisplay.textContent = minutesLeft;
  fullMinute = "00";
  secondsDisplay.textContent = fullMinute;

});

playButton.addEventListener("click", startTimer);

pauseButton.addEventListener("click", function(event){
  event.preventDefault();
  clearInterval(interval)
});
