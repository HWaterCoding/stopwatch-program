export default function createTimer(){

    let elapsedSeconds = 0;
    let startTime = null;
    let running = false;

    function startTimer(){
        if(running) return;
        startTime = performance.now()
        running = true;
    }

    function stopTimer(){
        
    }

    function resetTimer(){

    }

    function getElapsedMS(){

    }

    function isRunning(){
        return running;
    }

    return { startTimer, stopTimer, resetTimer, getElapsedMS, isRunning }
}