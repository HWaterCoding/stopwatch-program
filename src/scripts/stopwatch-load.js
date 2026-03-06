export default function loadStopwatch(){
    
    const stopwatchWrapper = document.getElementById("stopwatchWrapper");
    stopwatchWrapper.id = "stopwatchWrapper";
    
    const stopwatchh1 = document.createElement("h1");
    stopwatchh1.textContent = "Stop-Watch";
    stopwatchWrapper.appendChild(stopwatchh1);

    const stopwatchClockDiv = document.createElement("div");
    stopwatchClockDiv.id = "stopwatchClockDiv";
    stopwatchWrapper.appendChild(stopwatchClockDiv);

    const stopwatchTime = document.createElement("h1");
    stopwatchTime.textContent = "00:00:00";
    stopwatchTime.id = "stopwatchTime";
    stopwatchClockDiv.appendChild(stopwatchTime);

    const lapTimersDiv = document.createElement("div");
    lapTimersDiv.id = "lapTimersDiv";
    stopwatchClockDiv.appendChild(lapTimersDiv);

    const buttonContainer = document.createElement("div");
    buttonContainer.id = "buttonContainer";
    stopwatchClockDiv.appendChild(buttonContainer);

    const resetBtn = document.createElement("button");
    const resetIcon = document.createElement("i");
    resetIcon.classList.add("fa-solid", "fa-rotate-left");
    resetBtn.appendChild(resetIcon);
    resetBtn.id = "resetBtn";

    const toggleBtn = document.createElement("button");
    const playIcon = document.createElement("i");
    playIcon.classList.add("icon", "fa-solid", "fa-play");
    const pauseIcon = document.createElement("i");
    pauseIcon.classList.add("icon", "fa-solid", "fa-pause");
    toggleBtn.append(playIcon, pauseIcon);
    toggleBtn.id = "toggleBtn";

    const lapBtn = document.createElement("button");
    const lapIcon = document.createElement("i");
    lapIcon.classList.add("fa-solid", "fa-flag");
    lapBtn.appendChild(lapIcon);
    lapBtn.id = "lapBtn";

    buttonContainer.append(resetBtn, toggleBtn, lapBtn);

    return { stopwatchTime, lapTimersDiv, resetBtn, toggleBtn, lapBtn }
}