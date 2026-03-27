import createTimer from "./create-timer.js";

export default function createTimerManager(){

    let timers = [];
    console.log(timers)

    function addTimer({name, totalSeconds}){
        const timer = {
            id: crypto.randomUUID(),
            name: name,
            remaining: totalSeconds,
            instance: createTimer(totalSeconds)
        };
        timers.push(timer);
    }

    function deleteTimer(idToDelete){
        timers = timers.filter(timer => timer.id !== idToDelete)
    }

    function getTimers(){
        return timers;
    }

    return { addTimer, deleteTimer, getTimers }
}