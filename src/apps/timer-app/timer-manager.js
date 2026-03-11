export default function createTimerManager(){

    const timers = [];

    function addTimer(timer){
        timers.push(timer);
    }

    function deleteTimer(timer){

    }

    return { addTimer, deleteTimer }
}