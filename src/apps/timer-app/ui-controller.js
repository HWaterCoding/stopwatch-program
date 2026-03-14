//initalize timers here and all UI here
import createTimerForm from "./timer-form.js";
//add renderer + timer
export default function initTimer(timerDOM, timer, timerManager, renderer){ 
    
    const addTimerBtn = timerDOM.addTimerBtn;
    addTimerBtn.addEventListener("click", ()=>{
        createTimerForm((timerInfo)=>{
            timerManager.addTimer(timerInfo);
            renderer.setTime(timerInfo);
        });
    })

    const toggleTimerBtn = renderer.toggleTimerBtn;
    toggleTimerBtn.addEventListener("click", ()=>{
        if(!timer.isRunning()){
            timer.startTimer();
            toggleTimerBtn.classList.add("running");
        }
        else{
            timer.stopTimer();
            toggleTimerBtn.classList.remove("running");
        }
    });

    const resetTimerBtn = renderer.resetTimerBtn;
    resetTimerBtn.addEventListener("click", ()=>{
        timer.resetTimer();
    });

    const deleteTimerBtn = renderer.deleteTimerBtn;
    deleteTimerBtn.addEventListener("click", ()=>{
        //grab function from timerManager and get id using target.closest
    });
    //add the buttons once a timer is created from createTimer()
}


