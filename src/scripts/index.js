//Import CSS
import "../styles.css";

//Import all modules 
import loadStopwatch from "./load-stopwatch.js";
import createStopwatch from "./create-stopwatch.js";
import renderTime from "./render-time.js";
import lapTime from "./lap-manager.js";
import bindUI from "./ui-controller.js";

//Default page-load of stopwatch application:
const loadStopwatchDOM = loadStopwatch();
const stopwatch = createStopwatch();
const renderer = renderTime(stopwatch, loadStopwatchDOM.stopwatchTime);
const lapper = lapTime(stopwatch, loadStopwatchDOM.lapTimersDiv);
bindUI(stopwatch, renderer, loadStopwatchDOM, lapper);
setInterval(renderer.setTime, 25);

//Stop-watch logic once the "stopwatch" button on navBar is clicked
const mainContentDiv = document.getElementById("content");
const stopwatchBtn = document.getElementById("stopwatchBtn");
stopwatchBtn.addEventListener("click", () =>{
    mainContentDiv.innerHTML = "";
    const loadStopwatchDOM = loadStopwatch();
    const stopwatch = createStopwatch();
    const renderer = renderTime(stopwatch, loadStopwatchDOM.stopwatchTime);
    const lapper = lapTime(stopwatch, loadStopwatchDOM.lapTimersDiv);
    bindUI(stopwatch, renderer, loadStopwatchDOM, lapper);
    setInterval(renderer.setTime, 25);
});





//To-do:
//4) Store all stopwatch related files into it's own directory and fix filepaths
//5) Need to fix the CSS sizings and everything of the stopwatch program.
//6) Make all CSS completely responsive and play around with clamp() on everything.








const clockWrapper = document.getElementById("clockWrapper");
const clockBtn = document.getElementById("clockBtn");
clockBtn.addEventListener("click", () =>{
    mainContentDiv.innerHTML = "";
});

const timerWrapper = document.getElementById("timerWrapper");
const timerBtn = document.getElementById("timerBtn");
timerBtn.addEventListener("click", () =>{
    mainContentDiv.innerHTML = "";
});

const alarmWrapper = document.getElementById("alarmWrapper");
const alarmBtn = document.getElementById("alarmBtn");
alarmBtn.addEventListener("click", () =>{
    mainContentDiv.innerHTML = "";
});
