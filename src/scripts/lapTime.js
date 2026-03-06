export default function lapTime(stopwatch){

    let lapCount = 1;
    const lapTimers = document.getElementById("lapTimers");

    function createLap(){
        if(!stopwatch.isRunning()){
            return;
        }

        lapTimers.style.display = "flex";

        const elapsedMs = stopwatch.getElapsedMs();
        const minutes = Math.floor(elapsedMs / 60000);
        const seconds = Math.floor(elapsedMs / 1000) % 60;
        const centiseconds = Math.floor((elapsedMs % 1000) / 10);
        
        const lap = document.createElement("p");
        lap.innerHTML = `Lap ${lapCount}: ${pad2(minutes)}:${pad2(seconds)}:${pad2(centiseconds)}`;
        lap.classList.add("lap");
        lapTimers.appendChild(lap);

        lapCount++;
    }

    function resetLaps(){
        lapTimers.style.display = "none";
        lapTimers.innerHTML = "";
        lapCount = 1;
    }

    return { createLap, resetLaps }
}