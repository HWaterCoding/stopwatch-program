export default function createTimer(totalSeconds){

    let remainingTime = totalSeconds * 1000;
    let endTime = null;
    let running = false;

    function startTimer(){
        if(running) return;
        endTime = performance.now() + remainingTime;
        running = true;
    }

    function stopTimer(){
        if(!running) return;
        remainingTime = endTime - performance.now();
        running = false;
    }

    function resetTimer(){
        remainingTime = totalSeconds * 1000;
        running = false;
        endTime = null;
    }

    function getRemainingSeconds(){
        if(!running) return Math.floor(remainingTime / 1000);

        return Math.max(0, Math.floor((endTime - performance.now()) / 1000));
    }

    function isRunning(){
        return running;
    }

    return { startTimer, stopTimer, resetTimer, getRemainingSeconds, isRunning}
}