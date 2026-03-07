
function pad2(value){
    return String(value).padStart(2, "0");
}

function createStopwatch(){
    
    let secondsElapsed = 0;
    let interval = null;

    function getTime(){
        return secondsElapsed;
    }

    function timer(){
        secondsElapsed++;
    }

    function startClock(){
        if(interval) stopClock();
        interval = setInterval(timer, 1000);
    }

    function stopClock(){
        clearInterval(interval);
        interval = null;
    }

    function resetClock(){
        stopClock();
        secondsElapsed = 0;
    }

    return { startClock, stopClock, resetClock, getTime }

}


function renderTime(stopwatch, timeDisplay){

    function setTime(){
        const totalSeconds = stopwatch.getTime();
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        timeDisplay.innerHTML = `${pad2(minutes)}:${pad2(seconds)}`;
    }

    return { setTime }
}


const time = document.getElementById("time");

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

const stopwatch = createStopwatch();
const renderer = renderTime(stopwatch, time);

setInterval(renderer.setTime, 250);

startBtn.addEventListener("click", stopwatch.startClock);
stopBtn.addEventListener("click", stopwatch.stopClock);
resetBtn.addEventListener("click", () =>{
    stopwatch.resetClock();
    renderer.setTime();
    lapper.resetLaps();
});


//factory to handle lapBtn logic
function lapTime(stopwatch){

    let lapCount = 1;
    const lapTimers = document.getElementById("lapTimers");

    function createLap(){        
        lapTimers.style.display = "block";

        const elapsedSeconds = stopwatch.getTime();
        const minutes = Math.floor(elapsedSeconds / 60);
        const seconds = elapsedSeconds % 60;
        
        const lapH3 = document.createElement("h3");
        lapH3.innerHTML = `Lap ${lapCount}: ${pad2(minutes)}:${pad2(seconds)}`;
        lapH3.classList.add("lapH3");
        lapTimers.appendChild(lapH3);

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