//initalize timers here and all UI here
import createTimerForm from "./timer-form.js";
import createTimer from "./create-timer.js";
import { renderMain } from "./render-timer.js";

export default function initTimer(timerDOM, timerManager){ 
    
    const addTimerBtn = timerDOM.addTimerBtn;
    addTimerBtn.addEventListener("click", ()=>{
        createTimerForm((timerInfo)=>{
            timerManager.addTimer(timerInfo);
            renderMain(timerManager.getTimers());
        });
    })
}