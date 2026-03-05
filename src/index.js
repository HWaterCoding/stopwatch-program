//main file, add event listeners.

import loadStopwatch from "./stopwatch-load.js";


const stopwatchWrapper = document.getElementById("stopwatchWrapper");


const clockBtn = document.getElementById("clockBtn");
clockBtn.addEventListener("click", () =>{

});

const stopwatchBtn = document.getElementById("stopwatchBtn");
stopwatchBtn.addEventListener("click", () =>{
    stopwatchWrapper.innerHTML = "";
    loadStopwatch();
});

const timerBtn = document.getElementById("timerBtn");
timerBtn.addEventListener("click", () =>{

});

const alarmBtn = document.getElementById("alarmBtn");
alarmBtn.addEventListener("click", () =>{

});
