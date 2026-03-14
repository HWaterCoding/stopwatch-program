export default function createTimerManager(){

    let timers = [];
    console.log(timers)

    function addTimer({name, totalSeconds}){
        const timer = {
            id: crypto.randomUUID(),
            name: name,
            remaining: totalSeconds
        };
        timers.push(timer);
    }

    //this will get called after we fully render a timer and the deleteTimer button on the book is pressed.
    function deleteTimer(idToDelete){
        timers = timers.filter(timer => timer.id !== idToDelete)
    }

    function getTimers(){
        return timers;
    }

    return { addTimer, deleteTimer, getTimers }
}