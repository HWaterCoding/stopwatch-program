//THIS WILL EVENTUALLY BECOME SOMETHING LIKE "INIT-STOPWATCH.JS" AND BE USED TO SWITCH BETWEEN APPS.
//WE WILL PUT ALL OF THIS INTO A DEFAULT FUNCTION, EXPORT IT, AND CALL IT IN "APP-CONTROLLER.JS"


//Import CSS
import "../styles.css";

//Import all modules 
import loadStopwatch from "./stopwatch-app/load-stopwatch.js";
import createStopwatch from "./stopwatch-app/create-stopwatch.js";
import renderTime from "./stopwatch-app/render-time.js";
import lapTime from "./stopwatch-app/lap-manager.js";
import bindUI from "./stopwatch-app/ui-controller.js";

const mainContentDiv = document.getElementById("content");

let intervalId;
function startRenderer(renderer){
    clearInterval(intervalId);
    intervalId = setInterval(renderer.setTime, 25);
}

//STOPWATCH LOGIC

const stopwatchNavbarBtn = document.getElementById("stopwatchNavbarBtn");
stopwatchNavbarBtn.addEventListener("click", () =>{

    mainContentDiv.innerHTML = "";
    const loadStopwatchDOM = loadStopwatch();
    const stopwatch = createStopwatch();
    const renderer = renderTime(stopwatch, loadStopwatchDOM.stopwatchTime);
    const lapper = lapTime(stopwatch, loadStopwatchDOM.lapTimersDiv);
    bindUI(stopwatch, renderer, loadStopwatchDOM, lapper);
    startRenderer(renderer);
});




//TIMER LOGIC

import loadTimerDOM from "./timer-app/load-timer-DOM.js";
import createTimer from "./timer-app/create-timer.js";
import createTimerManager from "./timer-app/timer-manager.js";
import renderTimer from "./timer-app/render-timer.js";
import initTimer from "./timer-app/ui-controller.js";
import createTimerForm from "./timer-app/timer-form.js";

const timerNavbarBtn = document.getElementById("timerNavbarBtn");
timerNavbarBtn.addEventListener("click", () =>{
    mainContentDiv.innerHTML = "";
    const timerDOM = loadTimerDOM();
    const timer = createTimer();
    const timerManager = createTimerManager();
    // const renderer = renderTimer(timer, timerDOM.timerList);
    // initTimer(timer, timerDOM, renderer, timerManager);
    // startRenderer(renderer);
})






//To-do:
//1) Need to fix the CSS sizings and everything of the stopwatch program.
//2) Make all CSS completely responsive and play around with clamp() on everything.
//3) Move pad2() function into a shared utilities directory to use across multiple apps in project
//4) Consider a homepage with all 4 app interfaces screenshotted and displayed in a clickable image to take user to app