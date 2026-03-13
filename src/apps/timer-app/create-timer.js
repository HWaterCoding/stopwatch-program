export default function createTimer(name, totalSeconds){

    let timerName = name;
    let remainingSeconds = totalSeconds;
    let running = false;

    function startTimer(){
        if(running) return;
        
        running = true;
    }

    function stopTimer(){
        if(!running) return;
        elapsedSeconds = remainingSeconds - performance.now();
        running = false;
    }

    function resetTimer(){


        running = false;
    }

    function getRemainingSeconds(){

    }

    function isRunning(){
        return running;
    }


    
    return { startTimer, stopTimer, resetTimer, getRemainingSeconds, isRunning}
}

//BRAINSTORM FIRST!