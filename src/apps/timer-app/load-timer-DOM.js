export default function loadTimerDOM(){

    const contentDiv = document.getElementById("content");
    contentDiv.id = "content";

    const timerWrapper = document.createElement("div");
    timerWrapper.id = "timerWrapper";
    contentDiv.appendChild(timerWrapper);

    const timerTitleDiv = document.createElement("div");
    timerTitleDiv.id = "titleDiv";
    
    const timerTitle = document.createElement("h1");
    timerTitle.textContent = "Timers";

    const addTimerBtn = document.createElement("button");
    addTimerBtn.id = "addTimerBtn";
    const addTimerIcon = document.createElement("i");
    addTimerIcon.classList.add("fa-solid", "fa-plus");
    addTimerBtn.appendChild(addTimerIcon);

    timerTitleDiv.append(timerTitle, addTimerBtn);

    const timerContent = document.createElement("div");
    timerContent.id = "timerContent";

    timerWrapper.append(timerTitleDiv, timerContent)

    return { addTimerBtn }
}