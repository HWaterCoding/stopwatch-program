export default function lapTime(stopwatch, lapTimersDiv){

    function pad2(value){
        return String(value).padStart(2, "0");
    }

    let lapCount = 1;

    function createLap(){
        if(!stopwatch.isRunning()){
            return;
        }

        lapTimersDiv.style.display = "flex";

        const elapsedMs = stopwatch.getElapsedMs();
        const minutes = Math.floor(elapsedMs / 60000);
        const seconds = Math.floor(elapsedMs / 1000) % 60;
        const centiseconds = Math.floor((elapsedMs % 1000) / 10);
        
        const lap = document.createElement("p");
        lap.innerHTML = `Lap ${lapCount}: ${pad2(minutes)}:${pad2(seconds)}:${pad2(centiseconds)}`;
        lap.classList.add("lap");
        lapTimersDiv.appendChild(lap);

        lapCount++;
    }

    function resetLaps(){
        lapTimersDiv.style.display = "none";
        lapTimersDiv.innerHTML = "";
        lapCount = 1;
    }

    return { createLap, resetLaps }
}