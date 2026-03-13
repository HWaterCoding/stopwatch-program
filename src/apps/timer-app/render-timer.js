export default function renderTimer(timer){

    const timerList = document.getElementById("timerList");

    const timerDiv = document.createElement("div");
    timerDiv.classList.add("timerDiv");

    const timerTime = document.createElement("h1");
    timerTime.id = "timerTime";

    const timerButtonContainer = document.createElement("div");
    timerButtonContainer.id = "timerButtonContainer";

    const resetTimerBtn = document.createElement("button");
    resetTimerBtn.id = "resetTimerBtn";
    const toggleTimerBtn = document.createElement("button");
    toggleTimerBtn.id = "toggleTimerBtn";
    const deleteTimerBtn = document.createElement("button");
    deleteTimerBtn.id = "deleteTimeBtn";

    timerButtonContainer.append(resetTimerBtn, toggleTimerBtn, deleteTimerBtn);

    const timerInfoDiv = document.createElement("div");
    timerInfoDiv.id = "timerInfoDiv";

    const timerLabel = document.createElement("h3");
    timerLabel.id = "timerLabel";
    timerLabel.textContent = timer.name;
    const timerLength = document.createElement("h4");
    timerLength = timer.getRemainingSeconds(); 

    timerInfoDiv.append(timerLabel, timerLength);

    timerDiv.append(timerTime, timerButtonContainer, timerInfoDiv);
    timerList.appendChild(timerDiv);

    function setTime(){
        const remainingSeconds = timer.getRemainingSeconds();
        const hours = Math.floor(remainingSeconds / 3600);
        const minutes = Math.floor(remainingSeconds / 60);
        const seconds = Math.floor(remainingSeconds % 60);
        timerTime.innerHTML = `${hours}:${minutes}:${seconds}`;
    }

    return { setTime }
}