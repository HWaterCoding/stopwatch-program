export default function createTimer(name, totalSeconds){


    let elapsedSeconds = 0;
    let startTime = null;
    let running = false;

    function startTimer(){
        if(running) return;

        running = true;
    }

    function stopTimer(){
        if(!running) return;
        elapsedSeconds = startTime - performance.now();
        running = false;
    }

    function resetTimer(){


        running = false;
    }

    function remainingSeconds(){

    }

    function isRunning(){
        return running;
    }


    
    return { startTimer, stopTimer, resetTimer, remainingSeconds, isRunning}
}

//BRAINSTORM FIRST!