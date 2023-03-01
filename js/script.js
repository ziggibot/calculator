

/* global constants */

const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".button_number");
const displayNumbers = [];

/* basic math functions and operate */

function addNumbers(x, y) {
    z = parseFloat(x) + parseFloat(y);
    console.log(z);
}

function substractNumbers(x, y) {
    z = parseFloat(x) - parseFloat(y);
    console.log(z);
}

function multiplyNumbers(x, y) {
    z = parseFloat(x) * parseFloat(y);
    console.log(z);
}

function divideNumbers(x, y) {
    z = parseFloat(x) / parseFloat(y);
    console.log(z);
}

function operate(operator, x, y) {
    if (operator === '+') {
        z = addNumbers(x, y);
    } else if (operator === '-') {
        z = substractNumbers(x, y);
    } else if (operator === '*') {
        z = multiplyNumbers(x, y);
    } else if (operator === '/') {
        z = divideNumbers(x, y);
    }
}

/* import number input */

numberButtons.forEach(function (button) {
    button.onclick = function () {
        displayNumbers.push(this.value);
        console.log(parseFloat(displayNumbers.join('')));
    }
})


















