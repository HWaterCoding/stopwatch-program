export default function loadTimerDOM(){

    const contentDiv = document.getElementById("content");
    contentDiv.id = "content";
    const timerWrapper = document.createElement("div");
    timerWrapper.id = "timerWrapper";
    contentDiv.appendChild(timerWrapper);

    const timerTitle = document.createElement("h1");
    timerTitle.textContent = "Timer";
    const defaultMessageDiv = document.createElement("div");
    defaultMessageDiv.id = "defaultMessageDiv";
    const timerList = document.createElement("div");
    timerList.id = "timerList";
    timerWrapper.append(timerTitle, defaultMessageDiv, timerList);

    const stopwatchIcon = document.createElement("i");
    stopwatchIcon.classList.add("fa-solid", "fa-stopwatch");

    const stopwatchH3 = document.createElement("h3");
    stopwatchH3.textContent = "You don't have any timers set up yet.";

    const stopwatchH4 = document.createElement("h4");
    stopwatchH4.textContent = "Click + to add a timer.";

    const addTimerBtn = document.createElement("button");
    addTimerBtn.id = "addTimerBtn";
    const addTimerIcon = document.createElement("i");
    addTimerIcon.classList.add("fa-solid", "fa-plus");
    addTimerBtn.appendChild(addTimerIcon);

    defaultMessageDiv.append(stopwatchIcon, stopwatchH3, stopwatchH4, addTimerBtn);

    return { addTimerBtn }
}

//Complete

//revision:
//defaultMessageDiv needs to check if timers[] array is empty. If empty, it's display is flex. If not empty, display: none.
//probably want to do this directly in the createTimerMangager module, though. 