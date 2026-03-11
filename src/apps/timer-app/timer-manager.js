export default function createTimerManager(){

    const timers = [];

    function addTimer({name, totalSeconds}){
        const timer = {
            id: crypto.randomUUID(),
            name,
            remaining: totalSeconds
        };
        timers.push(timer);
    }

    function deleteTimer(timer){
        //retrieve id of timer using target.closest and remove from array.
    }

    return { addTimer, deleteTimer }
}