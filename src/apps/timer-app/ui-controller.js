//initalize timers here and all UI here
import createTimerForm from "./timer-form.js";
import renderTimer from "./render-timer.js";
import createTimer from "./create-timer.js";
export default function initTimer(timerDOM, timerManager){ 
    
    
    const addTimerBtn = timerDOM.addTimerBtn;
    addTimerBtn.addEventListener("click", ()=>{
        createTimerForm((timerInfo)=>{
            timerManager.addTimer(timerInfo);
            const timer = createTimer(timerInfo.totalSeconds);
            const renderer = renderTimer(timer, timerInfo);
            renderer.setTime();
        });
    })

}