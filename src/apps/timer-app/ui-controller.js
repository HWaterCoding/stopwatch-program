//initalize timers here and all UI here
export default function initTimer(timer, timerDOM, renderer, timerManager){
    
    const addTimerBtn = timerDOM.addTimerBtn;
    addTimerBtn.addEventListener("click", () => {
        const form = createTimerForm((timerInfo) => {
            timerManager.addTimer(timerInfo);
            renderer.renderTime(data);
        });
    });
    //access DOM here
    timerDOM.timerWrapper.appendChild(form);

    //add the buttons once a timer is created from createTimer()
}