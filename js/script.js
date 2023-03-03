

/* global constants */

const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".button_number");
const operatorButtons = document.querySelectorAll(".button_operator");
const equalsButton = document.querySelector(".button_equals");
const clearButton = document.querySelector(".button_clear");
const numbersInput = [];



/* global variables */

let displayNumber = "";
let firstOperand = "";
let secondOperand = "";
let currentOperator = "";


/* number input */

numberButtons.forEach(function (button) {
    button.onclick = function () {
        numbersInput.push(this.value);
        displayNumber = (parseFloat(numbersInput.join('')));
        display.innerHTML = displayNumber;
    }
})


/* operator input */

operatorButtons.forEach(function (button) {
    button.onclick = function () {
        currentOperator = this.value;
        firstOperand = parseFloat(display.innerHTML);
        numbersInput.length = 0;
    }
})


/* basic math functions and operate */

function addNumbers(x, y) {
    z = parseFloat(x) + parseFloat(y);
    display.innerHTML = Math.round(z * 100) / 100;
}

function substractNumbers(x, y) {
    z = parseFloat(x) - parseFloat(y);
    display.innerHTML = Math.round(z * 100) / 100;
}

function multiplyNumbers(x, y) {
    z = parseFloat(x) * parseFloat(y);
    display.innerHTML = Math.round(z * 100) / 100;
}

function divideNumbers(x, y) {
    z = parseFloat(x) / parseFloat(y);
    display.innerHTML = Math.round(z * 100) / 100;
}

function operate(currentOperator, firstOperand, secondOperand) {
    if ((currentOperator === '/') && (secondOperand === 0)) {
        display.innerHTML = "u fool";
    }
    else if (currentOperator === '+') {
        z = addNumbers(firstOperand, secondOperand);
    } else if (currentOperator === '-') {
        z = substractNumbers(firstOperand, secondOperand);
    } else if (currentOperator === '*') {
        z = multiplyNumbers(firstOperand, secondOperand);
    } else if (currentOperator === '/') {
        z = divideNumbers(firstOperand, secondOperand);
    }
}


/* function of equals and clear button */

equalsButton.addEventListener('click', function() {
    secondOperand = parseFloat(display.innerHTML);
    operate(currentOperator, firstOperand, secondOperand);
    firstOperand = "";
    currentOperator = "";
});

clearButton.addEventListener('click', function() {
    numbersInput.length = 0;
    firstOperand = "";
    secondOperand = "";
    display.innerHTML = "";
})


























