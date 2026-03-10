export default function loadTimer(){

    const contentDiv = document.getElementById("content");
    contentDiv.id = "content";
    const timerWrapper = document.createElement("div");
    timerWrapper.id = "timerWrapper";
    contentDiv.appendChild(timerWrapper);

    const timerTitle = document.createElement("h1");
    timerTitle.textContent = "Timer";
    const defaultMessageDiv = document.createElement("div");
    defaultMessageDiv.id = "defaultMessageDiv";
    timerWrapper.append(timerTitle, defaultMessageDiv);

    const stopwatchIcon = document.createElement("i");
    stopwatchIcon.classList.add("fa-solid", "fa-stopwatch");

    const stopwatchH3 = document.createElement("h3");
    stopwatchH3.textContent = "You don't have any timers set up yet.";

    const stopwatchH4 = document.createElement("h4");
    stopwatchH4.textContent = "Click + to add a timer.";

    const stopwatchH42 = document.createElement("h4");
    const deleteTimerIcon = document.createElement("i");
    deleteTimerIcon.classList.add("fa-solid", "fa-trash-can");
    stopwatchH42.append("Click ", deleteTimerIcon, " to delete a timer.");

    const timerButtonContainer = document.createElement("div");
    timerButtonContainer.id = "timerButtonContainer";

    const addTimerBtn = document.createElement("button");
    addTimerBtn.id = "addTimerBtn";
    const addTimerIcon = document.createElement("i");
    addTimerIcon.classList.add("fa-solid", "fa-plus");
    addTimerBtn.appendChild(addTimerIcon);

    const deleteTimerBtn = document.createElement("button");
    deleteTimerBtn.id = "deleteTimerBtn";
    deleteTimerBtn.appendChild(deleteTimerIcon);
    
    timerButtonContainer.append(addTimerBtn, deleteTimerBtn);
    
    defaultMessageDiv.append(stopwatchIcon, stopwatchH3, stopwatchH4, stopwatchH42, timerButtonContainer);

    return { addTimerBtn, deleteTimerBtn }
}




// export default function loadTimer(){

//     const contentDiv = document.getElementById("content");
//     contentDiv.id = "content";
//     const timerWrapper = document.createElement("div");
//     timerWrapper.id = "timerWrapper";
//     contentDiv.appendChild(timerWrapper);

//     const timerTitle = document.createElement("h1");
//     timerTitle.textContent = "Timer";
//     const timerDiv = document.createElement("div");
//     timerDiv.id = "timerDiv";
//     timerWrapper.append(timerTitle, timerDiv);

//     const timerTime = document.createElement("h1");
//     timerTime.textContent = "00:00:00";
//     const timerButtonContainer = document.createElement("div");
//     timerButtonContainer.id = "timerButtonContainer";
//     timerDiv.append(timerTime, timerButtonContainer);

//     const resetTimerBtn = document.createElement("button");
//     const resetTimerIcon = document.createElement("i");
//     resetTimerIcon.classList.add("fa-solid", "fa-rotate-left");
//     resetTimerBtn.appendChild(resetTimerIcon);
//     resetTimerBtn.id = "resetTimerBtn";

//     const toggleTimerBtn = document.createElement("button");
//     const playTimerIcon = document.createElement("i");
//     playTimerIcon.classList.add("icon", "fa-solid", "fa-play");
//     const pauseTimerIcon = document.createElement("i");
//     pauseTimerIcon.classList.add("icon", "fa-solid", "fa-pause");
//     toggleTimerBtn.append(playTimerIcon, pauseTimerIcon);
//     toggleTimerBtn.id = "toggleTimerBtn";
    
//     timerButtonContainer.append(resetTimerBtn, toggleTimerBtn);

//     return { timerTime, resetTimerBtn, toggleTimerBtn }
// }




//Things to add to the DOM creation:




//1)The "timerTime" element needs to be contained within a button.
//2)When that button is clicked, a modal looking almost the exact same needs to pop-up overtime of the displayed time
//3)The modal will display 00:00:00 and have "hours" "minutes" and "seconds" printed underneath each, accordingly.
//4)Each 3 segments of the time will incorporate a dropdown select element
//5)The first segment will have options 0-23, the second and third will be 0-59
//6)This modal also needs to have two buttons: 
//7) It needs to have an "addTimerBtn" to take the values selected and make the timer off that.
//8) It needs to have a "cancelTimerBtn" to basically just close the modal. 