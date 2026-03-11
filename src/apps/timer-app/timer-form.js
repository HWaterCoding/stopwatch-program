export default function createTimerForm(onSubmit){

    const formModal = document.createElement("div");

    const form = document.createElement("form");

    const formTitle = document.createElement("h3");
    formTitle.textContent = "Add New Timer"

    const timerNameLabel = document.createElement("label");
    timerNameLabel.textContent = "Timer Name:"
    const timerNameInput = document.createElement("input");
    timerNameInput.placeholder = "Name your timer.";
    timerNameInput.id = "timerNameInput";
    
    const timerSelect = document.createElement("div");

    const hoursSelect = document.createElement("select");
    const minutesSelect = document.createElement("select");
    const secondsSelect = document.createElement("select");
    
    const minNumber = 0;
    const maxHours = 23;
    const maxNumber = 59;
    for(let i = minNumber; i <= maxHours; i++){
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        hoursSelect.append(option);
    }
    for(let i = minNumber; i <= maxNumber; i++){
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        minutesSelect.append(option);
        secondsSelect.append(option);
    }
    timerSelect.append(hoursSelect, minutesSelect, secondsSelect);

    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Create Timer";
    submitBtn.id = "formSubmitBtn";

    form.append(formTitle, timerNameLabel, timerNameInput, timerSelect, submitBtn);
    formModal.appendChild(form);

    form.addEventListener("submit", (event)=>{
        event.preventDefault();

        const name = timerNameInput.value;
        
        const hours = Number(hoursSelect.value) * 3600;
        const minutes = Number(minutesSelect.value) * 60;
        const seconds = Number(secondsSelect.value);
        const totalSeconds = hours + minutes + seconds;

        onSubmit({name, totalSeconds});
        form.remove();
    });
    
    return { form }
}