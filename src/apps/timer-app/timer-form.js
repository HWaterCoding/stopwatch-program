export default function createTimerForm(){

    const contentDiv = document.getElementById("content");
    contentDiv.id = "content";
    const timerWrapper = document.createElement("div");
    timerWrapper.id = "timerWrapper";
    contentDiv.appendChild(timerWrapper);

    const formModal = document.createElement("div");

    const formModalTitle = document.createElement("h3");
    formModalTitle.textContent = "Add New Timer"

    const timerNameLabel = document.createElement("label");
    timerNameLabel.textContent = "Timer Name:"
    
    const timerName = document.createElement("input");
    timerName.id = "timerName";
    
    const minNumber = 0;
    const maxHours = 23;
    const maxNumber = 59;
    const hoursOptions = [];
    const numbersOptions = [];
    for(let i = minNumber; i < maxHours; i++){
        const option = i
        hoursOptions.push(option);
    }
    for(let i = minNumber; i < maxNumber; i++){
        const option = i;
        numbersOptions.push(option);
    }
    const hoursSelect = document.createElement("select");
    const minutesSelect = document.createElement("select");
    const secondsSelect = document.createElement("select");



    formModal.append(formModalTitle, timerNameLabel, timerName);
}