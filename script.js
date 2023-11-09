let num1 = null;
let num2 = null;
let display = "0";
let op = "";
let error = false;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        error = true;
        return "CANNOT DIVIDE BY 0";
    }
    return num1 / num2;
}