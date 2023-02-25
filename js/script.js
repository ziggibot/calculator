

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

operate('/', 10, 5);