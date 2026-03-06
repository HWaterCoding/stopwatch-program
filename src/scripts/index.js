//Import CSS
import "../styles.css";

//Import all modules 
import loadStopwatch from "./stopwatch-load.js";
import createStopwatch from "./create-stopwatch.js";
import renderTime from "./render-time.js";
import lapTime from "./lapTime.js";
import bindUI from "./ui-controller.js";

//Default page-load
// loadStopwatch();

const loadStopwatchDOM = loadStopwatch();
const stopwatch = createStopwatch();
const renderer = renderTime(stopwatch, loadStopwatchDOM.stopwatchTime);
const lapper = lapTime(stopwatch, loadStopwatchDOM.lapTimersDiv);

bindUI(stopwatch, renderer, loadStopwatchDOM, lapper);

setInterval(renderer.setTime, 25);

const stopwatchWrapper = document.getElementById("stopwatchWrapper");
const stopwatchBtn = document.getElementById("stopwatchBtn");
stopwatchBtn.addEventListener("click", () =>{
    //Change this to simply clear the contentDiv once you remove these 4 divs and create via DOM
    stopwatchWrapper.innerHTML = "";
    clockWrapper.innerHTML = "";
    timerWrapper.innerHTML = "";
    alarmWrapper.innerHTML = "";
    loadStopwatch();
});


//Complete:
//1) ResetBtn is not working. Go through the module and fix this.

//To-do:
//2) Only the default page-load version of stopwatch works, need the stopwatchBtn version to work too
//3) The toggleBtn is not changing it's icon when it's clicked. Need to fix.
//4) Change the stopwatch-load module to create the stopwatchWrapper rather than retrieve it.
//      Empty the content <div> and append the new stopwatchWrapper. 
//      Then just clear = "" the contentDiv rather than the 4 wrappers. Make the wrappers in the DOM.
//5) Need to fix the CSS sizings and everything of the stopwatch program.









const clockWrapper = document.getElementById("clockWrapper");
const clockBtn = document.getElementById("clockBtn");
clockBtn.addEventListener("click", () =>{
    stopwatchWrapper.innerHTML = "";
    clockWrapper.innerHTML = "";
    timerWrapper.innerHTML = "";
    alarmWrapper.innerHTML = "";
});

const timerWrapper = document.getElementById("timerWrapper");
const timerBtn = document.getElementById("timerBtn");
timerBtn.addEventListener("click", () =>{
    stopwatchWrapper.innerHTML = "";
    clockWrapper.innerHTML = "";
    timerWrapper.innerHTML = "";
    alarmWrapper.innerHTML = "";
});

const alarmWrapper = document.getElementById("alarmWrapper");
const alarmBtn = document.getElementById("alarmBtn");
alarmBtn.addEventListener("click", () =>{
    stopwatchWrapper.innerHTML = "";
    clockWrapper.innerHTML = "";
    timerWrapper.innerHTML = "";
    alarmWrapper.innerHTML = "";
});
