export default function loadStopwatch(){
    
    const stopwatchWrapper = document.getElementById("stopwatchWrapper");
    stopwatchWrapper.id = "stopwatchWrapper";
    
    const stopwatchh1 = document.createElement("h1");
    stopwatchh1.textContent = "Stop-Watch";
    stopwatchWrapper.appendChild(stopwatchh1);

    const stopwatchClockDiv = document.createElement("div");
    stopwatchClockDiv.id = "clock";
    stopwatchWrapper.appendChild(stopwatchClockDiv);

    const stopwatchTime = document.createElement("h1");
    stopwatchTime.textContent = "00:00:00";
    stopwatchTime.id = "time";
    stopwatchClockDiv.appendChild(stopwatchTime);

    const lapTimersDiv = document.createElement("div");
    lapTimersDiv.id = "lapTimers";
    stopwatchClockDiv.appendChild(lapTimersDiv);

    const buttonContainer = document.createElement("div");
    buttonContainer.id = "buttonContainer";
    stopwatchClockDiv.appendChild(buttonContainer);

    //need to add the icons to the buttons.
    const resetBtn = document.createElement("button");
    resetBtn.id = "reset";
    const toggleBtn = document.createElement("button");
    toggleBtn.id = "toggleBtn";
    const lapBtn = document.createElement("button");
    lapBtn.id = "lap";

    buttonContainer.append(resetBtn, toggleBtn, lapBtn);

}