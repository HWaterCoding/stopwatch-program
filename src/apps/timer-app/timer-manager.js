export default function createTimerManager(){

    const timers = [];

    function addTimer(timer){
        timers.push(timer);
    }

    function deleteTimer(timer){
        //retrieve id of timer using target.closest and remove from array.
    }

    return { addTimer, deleteTimer }
}