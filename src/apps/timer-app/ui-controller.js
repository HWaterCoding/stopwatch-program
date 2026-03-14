//initalize timers here and all UI here
import createTimerForm from "./timer-form.js";
import renderTimer from "./render-timer.js";
//add renderer + timer
export default function initTimer(timerDOM, timer, timerManager){ 
    
    
    const addTimerBtn = timerDOM.addTimerBtn;
    addTimerBtn.addEventListener("click", ()=>{
        createTimerForm((timerInfo)=>{
            timerManager.addTimer(timerInfo);
            const renderer = renderTimer(timer);
            renderer.setTime(timerInfo);
        });
    })

}


