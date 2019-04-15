const btnAdd = document.querySelector(".add");
const btnReset=document.querySelector(".clean");
const btnOptions=document.querySelector(".showOptions");
const btnAdvice=document.querySelector(".showAdvice");

const message=document.querySelector("h2");

const options = [];

const addOption = (e) => {
    e.preventDefault();
    const inputOption = document.querySelector('input');
    const newOption = inputOption.value;
    if (inputOption.value.length) {
        for (option of options) {
            if (option===newOption) {
                alert("Taka rada juz istnieje!")
                return
            }
        }
    options.push(newOption);
    inputOption.value="";
    }
}

const reset = (e) => {
    e.preventDefault();
    options.length=0;
}

const showOptions = () => {
    alert(options);
}

const showAdvice = () => {
    const optionIndex = Math.floor(Math.random()*options.length);
    message.textContent = `Bla bla bla -> ${options[optionIndex]}`
}


btnAdd.addEventListener("click", addOption);
btnReset.addEventListener("click", reset);
btnAdvice.addEventListener("click", showAdvice);
btnOptions.addEventListener("click", showOptions);