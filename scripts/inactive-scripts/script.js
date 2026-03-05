//stored global variables for all 3 buttons and the time elapsed display
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const time = document.getElementById("time");

//event listeners for all 3 buttons on page
startBtn.addEventListener("click", startClock);
stopBtn.addEventListener("click", stopClock);
resetBtn.addEventListener("click", resetClock);

//2 global variables to count seconds and determine interval state
let secondsElapsed = 0;
let interval = null;

//function to make display time always "00:00" format
function padStart(value){
    return String(value).padStart(2, "0");
}

//function to set the current elapsed time
function setTime(){
    const minutes = Math.floor(secondsElapsed / 60);
    const seconds = secondsElapsed % 60;
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;
}

//function that counts the seconds and displays updated time every second
function timer(){
    secondsElapsed++;
    setTime();
}


//3 functions for the buttons. Start/Stop/Reset
function startClock(){
    if(interval) stopClock();
    interval = setInterval(timer, 1000);
}


function stopClock(){
    clearInterval(interval);
}


function resetClock(){
    stopClock();
    secondsElapsed = 0;
    setTime();
}