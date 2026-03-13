export default function renderTimer(timer){

    const timerList = document.getElementById("timerList");
    //access the timers[] array in timer-manager and loop with forEach/for of to apply these styles to each timer object
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