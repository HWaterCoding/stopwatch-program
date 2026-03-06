//Can rewrite this to just be setTime outside a factory if nothing else needed


//need to grab the time display 
export default function renderTime(stopwatch, timeDisplay){

    function setTime(){
        const elapsedMs = stopwatch.getElapsedMs();
        const minutes = Math.floor(elapsedMs / 60000);
        const seconds = Math.floor(elapsedMs / 1000) % 60;
        const centiseconds = Math.floor((elapsedMs % 1000) / 10);
        timeDisplay.innerHTML = `${pad2(minutes)}:${pad2(seconds)}:${pad2(centiseconds)}`;
    }

    return { setTime }
}