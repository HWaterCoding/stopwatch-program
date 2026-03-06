export default function bindUI(stopwatch, renderer, loadStopwatchDOM, lapper){
    
    const toggleBtn = loadStopwatchDOM.toggleBtn;
    toggleBtn.addEventListener("click", () => {
        if(!stopwatch.isRunning()) {
            stopwatch.startClock();
            toggleBtn.classList.add("running")
        }
        else {
            stopwatch.stopClock();
            toggleBtn.classList.remove("running")
        } 
    });

    const resetBtn = loadStopwatchDOM.resetBtn;
    resetBtn.addEventListener("click", () =>{
        stopwatch.resetClock();
        renderer.setTime();
        lapper.resetLaps();
        toggleBtn.classList.remove("running");
    });
    
    const lapBtn = loadStopwatchDOM.lapBtn;
    lapBtn.addEventListener("click", lapper.createLap);
}