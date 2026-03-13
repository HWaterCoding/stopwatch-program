//initalize timers here and all UI here
import createTimerForm from "./timer-form.js";
//add renderer + timer
export default function initTimer(timerDOM, timerManager, timerForm, renderer){ 
    
    const addTimerBtn = timerDOM.addTimerBtn;
    addTimerBtn.addEventListener("click", ()=>{
        createTimerForm(timerInputs);
        //timerInputs needs to be a function?
    })
    
    // const timerWrapper = document.getElementById("timerWrapper");


    //add the buttons once a timer is created from createTimer()
}



// addTimerBtn.addEventListener("click", () => {
//     overlay.style.display = "flex";
//     const form = createTimerForm((timerInfo) => {
//         timerManager.addTimer(timerInfo);
//         renderer.renderTime(data);
//     });
//     timerWrapper.appendChild(form);
// });