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
import createTimer from "./timer-app/create-timer.js";
import createTimerManager from "./timer-app/timer-manager.js";
import renderTimer from "./timer-app/render-timer.js";
import initTimer from "./timer-app/ui-controller.js";

const timerNavbarBtn = document.getElementById("timerNavbarBtn");
timerNavbarBtn.addEventListener("click", () =>{

    // let intervalId;
    // function startRenderer(renderer){
    //     clearInterval(intervalId);
    //     intervalId = setInterval(renderer.setTime, 25); //might have to change 25 to 1000
    // }

    mainContentDiv.innerHTML = "";
    const timerDOM = loadTimerDOM();
    const timerManager = createTimerManager();
    const timer = createTimer();
    initTimer(timerDOM, timer, timerManager);
})


//Work-Flow for now:
//1) fix the form and make it work.
//2) make the timerManager properly store timers. 
//3) make the renderer display timers properly.
//4) finish the logic for the createTimer module 
//5) connect everything



//To-do:
//1) Need to fix the CSS sizings and everything of the stopwatch program.
//2) Make all CSS completely responsive and play around with clamp() on everything.
//3) Move pad2() function into a shared utilities directory to use across multiple apps in project
//4) Consider a homepage with all 4 app interfaces screenshotted and displayed in a clickable image to take user to app