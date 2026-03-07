export default function loadTimer(){

    const contentDiv = document.getElementById("content");
    contentDiv.id = "content";
    const timerWrapper = document.createElement("div");
    timerWrapper.id = "timerWrapper";
    contentDiv.appendChild(timerWrapper);

    const timerTitle = document.createElement("h1");
    timerTitle.textContent = "Timer";
    const timerDiv = document.createElement("div");
    timerDiv.id = "timerDiv";
    timerWrapper.append(timerTitle, timerDiv);

    const timerTime = document.createElement("h1");
    timerTime.textContent = "00:00:00";
    const timerButtonContainer = document.createElement("div");
    timerButtonContainer.id = "timerButtonContainer";
    timerDiv.append(timerTime, timerButtonContainer);

    const resetTimerBtn = document.createElement("button");
    const resetTimerIcon = document.createElement("i");
    resetTimerIcon.classList.add("fa-solid", "fa-rotate-left");
    resetTimerBtn.appendChild(resetTimerIcon);
    resetTimerBtn.id = "resetTimerBtn";

    const toggleTimerBtn = document.createElement("button");
    const playTimerIcon = document.createElement("i");
    playTimerIcon.classList.add("icon", "fa-solid", "fa-play");
    const pauseTimerIcon = document.createElement("i");
    pauseTimerIcon.classList.add("icon", "fa-solid", "fa-pause");
    toggleTimerBtn.append(playTimerIcon, pauseTimerIcon);
    toggleTimerBtn.id = "toggleTimerBtn";
    
    timerButtonContainer.append(resetTimerBtn, toggleTimerBtn);

    return { timerTime, resetTimerBtn, toggleTimerBtn }
}