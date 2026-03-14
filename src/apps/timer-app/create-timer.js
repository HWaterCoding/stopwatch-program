export default function createTimer(totalSeconds){

    let remainingSeconds = totalSeconds;
    let secondsElapsed = 0;
    let running = false;

    function startTimer(){
        if(running) return;
        if(remainingSeconds === 0) return;
        remainingSeconds--;
        secondsElapsed++;
        running = true;
    }

    function stopTimer(){
        if(!running) return;

        running = false;
    }

    function resetTimer(){


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

//BRAINSTORM FIRST!