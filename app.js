let slider = document.getElementById("myRange");
let output = document.getElementById("test123");
let pLength = 0

output.innerHTML = slider.value; // Display the default slider value

slider.oninput = function() {
    output.innerHTML = this.value;
    pLength = this.value;
}

function randomIndex(str){
    return Math.floor(Math.random() * str.length);
}

function getRandomLower(){
    const letters = `abcdefghijklmnopqrstuvwxyz`;
    return letters[randomIndex(letters)];
}

function getRandomUpper(){
    const letter = getRandomLower();
    return letter.toUpperCase();
}

function getRandomNumber(){
    const numbers = `1234567890`;
    return numbers[randomIndex(numbers)];
}

function getRandomSymbol(){
    const symbols = `!@#$%^&*(){}[]=<>/,.`;
    return symbols[randomIndex(symbols)];
}

const randomFunctions = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

const resultEl = document.querySelector(`#result`);
const clipboardEl = document.querySelector(`#clipboard`);
const lowercaseEl = document.querySelector(`#lowercase`);
const uppercaseEl = document.querySelector(`#uppercase`);
const numbersEl = document.querySelector(`#numbers`);
const symbolsEl = document.querySelector(`#symbols`);
const lengthEl = document.querySelector(`#myRange`);
const generateEl = document.querySelector(`#generate`);

function generatePassword(lower, upper, number, symbol, length){
    let generatedPassword = ``;
    const typesCount = lower + upper + number + symbol;
if (typesCount === 0) {
    alert(`Select an option`);
    return ``;
}

let typesArr = [
    [`lower`, lower],
    [`upper`, upper],
    [`number`, number],
    [`symbol`, symbol]
];

typesArr = typesArr.filter((item) => {
    console.log(item[1]);
    return item[1];
}); 

for (i = 0; i < length; i += typesCount){
    typesArr.forEach((type) => {
        const funcName = type[0];
        generatedPassword += randomFunctions[funcName]();
            console.log(generatedPassword);
        });
    }
    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword;
}


generateEl.addEventListener(`click`, () => {
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;
    const length = parseInt(lengthEl.value);
    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});


clipboardEl.addEventListener(`click`, () => {
    const password = resultEl.innerText;
    if (password === ``){
        alert(`Please generate a password first`);
        return;
    }
    navigator.clipboard.writeText(password);
});