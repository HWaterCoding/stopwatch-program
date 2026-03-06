//Import CSS
import "../styles.css";

//Import all modules 
import loadStopwatch from "./stopwatch-load.js";
import createStopwatch from "./create-stopwatch.js";
import renderTime from "./render-time.js";
// import lapTime from "./lapTime.js";

//Default page-load
loadStopwatch();

const loadStopwatchDOM = loadStopwatch();
const stopwatch = createStopwatch();
renderTime(stopwatch, loadStopwatchDOM.timeDisplay);

const stopwatchWrapper = document.getElementById("stopwatchWrapper");
const stopwatchBtn = document.getElementById("stopwatchBtn");
stopwatchBtn.addEventListener("click", () =>{
    stopwatchWrapper.innerHTML = "";
    clockWrapper.innerHTML = "";
    timerWrapper.innerHTML = "";
    alarmWrapper.innerHTML = "";
    loadStopwatch();
});













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
