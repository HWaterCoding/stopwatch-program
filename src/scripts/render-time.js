export default function renderTime(stopwatch, timeDisplay){

    function pad2(value){
        return String(value).padStart(2, "0");
    }

    function setTime(){
        const elapsedMs = stopwatch.getElapsedMs();
        const minutes = Math.floor(elapsedMs / 60000);
        const seconds = Math.floor(elapsedMs / 1000) % 60;
        const centiseconds = Math.floor((elapsedMs % 1000) / 10);
        timeDisplay.innerHTML = `${pad2(minutes)}:${pad2(seconds)}:${pad2(centiseconds)}`;
    }

    return { setTime }
}