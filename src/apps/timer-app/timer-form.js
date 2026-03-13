export default function createTimerForm(onSubmit){

    const timerWrapper = document.getElementById("timerWrapper");
    
    const modalOverlay = document.createElement("div");
    modalOverlay.id = "overlay";
        //Fix this below so that you can close the overlay by clicking outside of the form
    // modalOverlay.addEventListener("click", () =>{
    //     modalOverlay.style.display = "none";
    // })
    timerWrapper.append(modalOverlay);

    const formModal = document.createElement("div");
    formModal.id = "formModal";
    modalOverlay.appendChild(formModal);

    const form = document.createElement("form");
    form.id = "form";
    formModal.appendChild(form);

    const formTitle = document.createElement("h3");
    formTitle.textContent = "Add New Timer"

    const timerNameLabel = document.createElement("label");
    timerNameLabel.textContent = "Timer Name:"
    const timerNameInput = document.createElement("input");
    timerNameInput.placeholder = "Name your timer";
    timerNameInput.id = "timerNameInput";
    
    const timerSelect = document.createElement("div");
    timerSelect.id = "timerSelect";

    const hoursSelectLabel = document.createElement("label");
    hoursSelectLabel.textContent = "Hours";
    const hoursSelect = document.createElement("select");
    hoursSelect.id = "hoursSelect";
    const minutesSelectLabel = document.createElement("label");
    minutesSelectLabel.textContent = "Minutes"
    const minutesSelect = document.createElement("select");
    minutesSelect.id = "minutesSelect";
    const secondsSelectLabel = document.createElement("label");
    secondsSelectLabel.textContent = "Seconds";
    const secondsSelect = document.createElement("select");
    secondsSelect.id = "secondsSelect";
    
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
        const minutesOption = document.createElement("option");
        minutesOption.value = i;
        minutesOption.textContent = i;
        minutesSelect.append(minutesOption);

        const secondsOption = document.createElement("option");
        secondsOption.value = i;
        secondsOption.textContent = i;
        secondsSelect.append(secondsOption);
    }
    timerSelect.append(hoursSelectLabel, hoursSelect, minutesSelectLabel, minutesSelect, secondsSelectLabel, secondsSelect);

    const buttonContainer = document.createElement("div");
    buttonContainer.id = "timerFormButtonContainer";

    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.textContent = "Create Timer";
    submitBtn.id = "formSubmitBtn";

    const cancelTimerBtn = document.createElement("button");
    cancelTimerBtn.textContent = "Cancel";
    cancelTimerBtn.id = "cancelTimerBtn";
    cancelTimerBtn.addEventListener("click", ()=>{
        modalOverlay.remove();
    })

    buttonContainer.append(submitBtn, cancelTimerBtn);
    form.append(formTitle, timerNameLabel, timerNameInput, timerSelect, buttonContainer);

    form.addEventListener("submit", (event)=>{
        event.preventDefault();

        const name = timerNameInput.value;
        
        const hours = Number(hoursSelect.value) * 3600;
        const minutes = Number(minutesSelect.value) * 60;
        const seconds = Number(secondsSelect.value);
        const totalSeconds = hours + minutes + seconds;

        onSubmit({name, totalSeconds});
        modalOverlay.remove();
    });
    
    return { form }
}

//Complete