export default function renderTimer(timer, timerList){

    const timerDiv = document.createElement("div");
    timerDiv.classList.add("timerDiv");

    const timerTime = document.createElement("h1");
    timerTime.id = "timerTime";
    //timerTime.textContent = timer.Time (Retrieve input from user in createTimer)

    const resetTimerBtn = document.createElement("button");
    resetTimerBtn.id = "resetTimerBtn";

    const toggleTimerBtn = document.createElement("button");
    toggleTimerBtn.id = "toggleTimerBtn";

    const timerLabel = document.createElement("h3");
    timerLabel.id = "timerLabel";
    //timerLabel.textContent = "" (Retrieve input from user in createTimer)

    timerDiv.append(timerTime, resetTimerBtn, toggleTimerBtn, timerLabel);
    timerList.appendChild(timerDiv);
}

