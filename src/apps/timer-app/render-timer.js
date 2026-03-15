export default function renderTimer(timer, timerInfo){

    const timerList = document.getElementById("timerList");

    const timerDiv = document.createElement("div");
    timerDiv.classList.add("timerDiv");

    const timerTime = document.createElement("h1");
    timerTime.classList.add("timerTime");

    const timerButtonContainer = document.createElement("div");
    timerButtonContainer.id = "timerButtonContainer";

    const resetTimerBtn = document.createElement("button");
    const resetTimerIcon = document.createElement("i");
    resetTimerIcon.classList.add("fa-solid", "fa-rotate-left");
    resetTimerBtn.id = "resetTimerBtn";
    resetTimerBtn.appendChild(resetTimerIcon);
    resetTimerBtn.addEventListener("click", ()=>{
        timer.resetTimer();
    });

    const toggleTimerBtn = document.createElement("button");
    const playTimerIcon = document.createElement("i");
    playTimerIcon.classList.add("icon", "fa-solid", "fa-play");
    const pauseTimerIcon = document.createElement("i");
    pauseTimerIcon.classList.add("icon", "fa-solid", "fa-pause");
    toggleTimerBtn.id = "toggleTimerBtn";
    toggleTimerBtn.append(playTimerIcon, pauseTimerIcon);
    toggleTimerBtn.addEventListener("click", ()=>{
        if(!timer.isRunning()){
            timer.startTimer();
            toggleTimerBtn.classList.add("running");
        }
        else{
            timer.stopTimer();
            toggleTimerBtn.classList.remove("running");
        }
    });

    const deleteTimerBtn = document.createElement("button");
    const deleteTimerIcon = document.createElement("i");
    deleteTimerIcon.classList.add("fa-solid", "fa-trash");
    deleteTimerBtn.id = "deleteTimeBtn";
    deleteTimerBtn.appendChild(deleteTimerIcon);
    deleteTimerBtn.addEventListener("click", (event)=>{
        const timerToDelete = event.target.closest(".timerDiv");
        //grab the id from manager?
        //delete the timer
        //then grab getTimers() and loop through the re-render all timers
    });

    timerButtonContainer.append(resetTimerBtn, toggleTimerBtn, deleteTimerBtn);

    const timerInfoDiv = document.createElement("div");
    timerInfoDiv.id = "timerInfoDiv";

    const timerLabel = document.createElement("h3");
    timerLabel.id = "timerLabel";
    timerLabel.textContent = timerInfo.name;
    const timerLength = document.createElement("h4");
    timerLength.textContent = timerInfo.totalSeconds; 

    timerInfoDiv.append(timerLabel, timerLength);

    timerDiv.append(timerTime, timerButtonContainer, timerInfoDiv);
    timerList.appendChild(timerDiv);

    function setTime(){
        const remainingSeconds = timer.getRemainingSeconds();
        const hours = Math.floor(remainingSeconds / 3600);
        const minutes = Math.floor(remainingSeconds / 60);
        const seconds = Math.floor(remainingSeconds % 60);
        //import pad2 from utilies and wrap timerTime
        timerTime.innerHTML = `${hours}:${minutes}:${seconds}`;
    }

    return { setTime }
}