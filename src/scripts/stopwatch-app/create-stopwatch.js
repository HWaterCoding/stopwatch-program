export default function createStopwatch(){

    let elapsedMs = 0;
    let startTime = null;
    let running = false;

    function startClock(){
        if(running) return;
        startTime = performance.now();
        running = true;
    }

    function stopClock(){
        if(!running) return;
        elapsedMs += performance.now() - startTime;
        running = false;
    }

    function resetClock(){
        startTime = null;
        elapsedMs = 0;
        running = false;
    }

    function getElapsedMs() {
        if (!running) return elapsedMs;
        return elapsedMs + (performance.now() - startTime);
    }

    function isRunning() {
        return running;
    }

    return { startClock, stopClock, resetClock, getElapsedMs, isRunning }
    
}