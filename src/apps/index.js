//This file will be the index file and we will eventually move almost everything over to a new module called "app-controller.js"
//We will then just returns functions from there to choose which app loads and control switching logic here.

//Import CSS
import "../styles.css";

//Import all modules 
import loadStopwatch from "./stopwatch-app/load-stopwatch.js";
import createStopwatch from "./stopwatch-app/create-stopwatch.js";
import renderTime from "./stopwatch-app/render-time.js";
import lapTime from "./stopwatch-app/lap-manager.js";
import bindUI from "./stopwatch-app/ui-controller.js";

const mainContentDiv = document.getElementById("content");
//default page load
chooseStopwatchApp();

//STOPWATCH LOGIC

function chooseStopwatchApp(){
    let intervalId;
    function startRenderer(renderer){
        clearInterval(intervalId);
        intervalId = setInterval(renderer.setTime, 25);
    }

    mainContentDiv.innerHTML = "";
    const loadStopwatchDOM = loadStopwatch();
    const stopwatch = createStopwatch();
    const renderer = renderTime(stopwatch, loadStopwatchDOM.stopwatchTime);
    const lapper = lapTime(stopwatch, loadStopwatchDOM.lapTimersDiv);
    bindUI(stopwatch, renderer, loadStopwatchDOM, lapper);
    startRenderer(renderer);
}

const stopwatchNavbarBtn = document.getElementById("stopwatchNavbarBtn");
stopwatchNavbarBtn.addEventListener("click", () => chooseStopwatchApp());




//TIMER LOGIC

import loadTimerDOM from "./timer-app/load-timer-DOM.js";
import createTimerManager from "./timer-app/timer-manager.js";
import { renderMain, updateAllTimers } from "./timer-app/render-timer.js";
import initTimer from "./timer-app/ui-controller.js";

let timerManager;
setInterval(() => {
    if(timerManager){
        updateAllTimers(timerManager.getTimers());
    }
}, 1000);

const timerNavbarBtn = document.getElementById("timerNavbarBtn");
timerNavbarBtn.addEventListener("click", () =>{

    mainContentDiv.innerHTML = "";
    const timerDOM = loadTimerDOM();
    timerManager = createTimerManager();
    renderMain(timerManager.getTimers());
    initTimer(timerDOM, timerManager);
})






//To-do:
//1) Need to fix the CSS sizings and everything of the stopwatch program.
//2) Make all CSS completely responsive and play around with clamp() on everything.
//3) Move pad2() function into a shared utilities directory to use across multiple apps in project
//4) Consider a homepage with all 4 app interfaces screenshotted and displayed in a clickable image to take user to app