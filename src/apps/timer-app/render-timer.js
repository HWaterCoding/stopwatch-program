import pad2 from "../shared/utilities/pad2.js"

export function renderMain(timers){
    const main = document.getElementById("main");

    if(timers.length === 0){
        renderEmptyState()
    } else {
        renderTimerList(timers);
    }
}

function renderTimerList(timers){
    
    const timerList = document.getElementById("timerList");
    timerList.innerHTML = "";

    timers.forEach(timer => {
        
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
            timer.instance.resetTimer();
        });
    
        const toggleTimerBtn = document.createElement("button");
        const playTimerIcon = document.createElement("i");
        playTimerIcon.classList.add("icon", "fa-solid", "fa-play");
        const pauseTimerIcon = document.createElement("i");
        pauseTimerIcon.classList.add("icon", "fa-solid", "fa-pause");
        toggleTimerBtn.id = "toggleTimerBtn";
        toggleTimerBtn.append(playTimerIcon, pauseTimerIcon);
        toggleTimerBtn.addEventListener("click", ()=>{
            if(!timer.instance.isRunning()){
                timer.instance.startTimer();
                toggleTimerBtn.classList.add("running");
            }
            else{
                timer.instance.stopTimer();
                toggleTimerBtn.classList.remove("running");
            }
        });
    
        //eventually change delete button to be with the addTimerBtn and make it create a checkbox in corner of all timers.
        //when a checkbox on a timer is checked, allow the user to re-click the delete button to remove those timers.
        //allow deletion of multiple timers at once 
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
        timerLabel.textContent = timer.name;
        const timerLength = document.createElement("h4");
        timerLength.id = "timerLength";
        timerLength.textContent = timer.totalSeconds;
        //fix this, it's total seconds not converted yet
    
        timerInfoDiv.append(timerLabel, timerLength);
    
        timerDiv.append(timerTime, timerButtonContainer, timerInfoDiv);
        timerList.append(timerDiv);
        
        function setTime(){
            const remainingSeconds = timer.instance.getRemainingSeconds();
            const hours = Math.floor(remainingSeconds / 3600);
            const minutes = Math.floor(remainingSeconds / 60) % 60;
            const seconds = Math.floor(remainingSeconds % 60);
            timerTime.innerHTML = `${pad2(hours)}:${pad2(minutes)}:${pad2(seconds)}`;
        }

        setTime();
    });
}

function renderEmptyState(){
    const timerContent = document.getElementById("timerContent");

    const emptyStateDiv = document.createElement("div");
    emptyStateDiv.id = "emptyStateDiv";

    const stopwatchIcon = document.createElement("i");
    stopwatchIcon.classList.add("fa-solid", "fa-stopwatch");

    const stopwatchH3 = document.createElement("h3");
    stopwatchH3.textContent = "You don't have any timers set up yet.";

    const stopwatchH4 = document.createElement("h4");
    stopwatchH4.textContent = "Click + to add a timer.";

    emptyStateDiv.append(stopwatchIcon, stopwatchH3, stopwatchH4);

    timerContent.append(emptyStateDiv);
}