
const display = document.querySelector("#display");
const displayValue = document.querySelector("#display").innerHTML;
const numberButtons = document.querySelectorAll(".button_number");

function addNumbers(x, y) {
    z = parseInt(x) + parseInt(y);
    console.log(z);
}

function substractNumbers(x, y) {
    z = parseInt(x) - parseInt(y);
    console.log(z);
}

function multiplyNumbers(x, y) {
    z = parseInt(x) * parseInt(y);
    console.log(z);
}

function divideNumbers(x, y) {
    z = parseInt(x) / parseInt(y);
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

numberButtons.forEach(function(button) {
    button.onclick = function(e) {
        console.log(this.value);
    }
})
