
function pad2(value){
    return String(value).padStart(2, "0");
}

function createStopwatch(){
    
    let elapsedMs = 0;
    let startTime = null;
    let running = false;

    function startClock(){
        if(running) return;
        startTime = performance.now();
        running = true;
    }

    function stopClock(){
        if(!running) return;
        elapsedMs += performance.now() - startTime;
        running = false;
    }

    function resetClock(){
        startTime = null;
        elapsedMs = 0;
        running = false;
    }

    function getElapsedMs() {
        if (!running) return elapsedMs;
        return elapsedMs + (performance.now() - startTime);
    }

    function isRunning() {
        return running;
    }

    return { startClock, stopClock, resetClock, getElapsedMs, isRunning }

}

const stopwatch = createStopwatch();

const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", () =>{
    stopwatch.resetClock();
    renderer.setTime();
    lapper.resetLaps();
    toggleBtn.classList.remove("running");
});


const toggleBtn = document.getElementById("toggleBtn");
toggleBtn.addEventListener("click", () => {
    if(!stopwatch.isRunning()) {
        stopwatch.startClock();
        toggleBtn.classList.add("running")
    }
    else {
        stopwatch.stopClock();
        toggleBtn.classList.remove("running")
    } 
});


function renderTime(stopwatch, timeDisplay){

    function setTime(){
        const elapsedMs = stopwatch.getElapsedMs();
        const minutes = Math.floor(elapsedMs / 60000);
        const seconds = Math.floor(elapsedMs / 1000) % 60;
        const centiseconds = Math.floor((elapsedMs % 1000) / 10);
        timeDisplay.innerHTML = `${pad2(minutes)}:${pad2(seconds)}:${pad2(centiseconds)}`;
    }

    return { setTime }
}

const time = document.getElementById("time");
const renderer = renderTime(stopwatch, time);
setInterval(renderer.setTime, 25);

//factory to handle lapBtn logic
function lapTime(stopwatch){

    let lapCount = 1;
    const lapTimers = document.getElementById("lapTimers");

    function createLap(){
        if(!stopwatch.isRunning()){
            return;
        }

        lapTimers.style.display = "flex";

        const elapsedMs = stopwatch.getElapsedMs();
        const minutes = Math.floor(elapsedMs / 60000);
        const seconds = Math.floor(elapsedMs / 1000) % 60;
        const centiseconds = Math.floor((elapsedMs % 1000) / 10);
        
        const lap = document.createElement("p");
        lap.innerHTML = `Lap ${lapCount}: ${pad2(minutes)}:${pad2(seconds)}:${pad2(centiseconds)}`;
        lap.classList.add("lap");
        lapTimers.appendChild(lap);

        lapCount++;
    }

    function resetLaps(){
        lapTimers.style.display = "none";
        lapTimers.innerHTML = "";
        lapCount = 1;
    }

    return { createLap, resetLaps }
}

const lapBtn = document.getElementById("lap");
const lapper = lapTime(stopwatch);
lapBtn.addEventListener("click", lapper.createLap);




//To-Do ASAP:
//1. Make it so that the lap button cannot be clicked if the stopwatch hasn't started.
//2. Fix the lap-timers container so that it is a confined space to the right of the clock,
// doesn't mess up the layout of the page, and is contained to a scroll-box container.


// Features and functions to add going forward:

// Try to add other clock features like a timer that counts down from the time
// the user inputs.

// Try to add an alarm system to see how that work work, using Date.now()

