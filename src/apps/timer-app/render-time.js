export default function renderTimer(timer, timerList){

    const timerDiv = document.createElement("div");
    timerDiv.id = "timerDiv";

    const timerTime = document.createElement("h1");
    timerTime.id = "timerTime";

    const resetTimerBtn = document.createElement("button");
    resetTimerBtn.id = "resetTimerBtn";

    const toggleTimerBtn = document.createElement("button");
    toggleTimerBtn.id = "toggleTimerBtn";

    const timerLabel = document.createElement("h3");
    timerLabel.id = "timerLabel";

    timerDiv.append(timerTime, resetTimerBtn, toggleTimerBtn, timerLabel);
    timerList.appendChild(timerDiv);
}