export default function createTimer(totalSeconds){

    //take totalSeconds passed in
    //as timer runs, decrement totalSeconds.
    //if no seconds remaining, stop timer.
    let remainingSeconds = totalSeconds;
    let running = false;

    function startTimer(){
        if(running) return;
        if(remainingSeconds === 0) {
            stopTimer()
        };
        remainingSeconds--;
        running = true;
    }

    function stopTimer(){
        if(!running) return;

        running = false;
    }

    function resetTimer(){
        remainingSeconds = totalSeconds;
        running = false;
    }

    function getRemainingSeconds(){
        return remainingSeconds;
    }

    function isRunning(){
        return running;
    }

    return { startTimer, stopTimer, resetTimer, getRemainingSeconds, isRunning}
}