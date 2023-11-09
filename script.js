let num1 = null;
let num2 = null;
let display = "0";
let op = "";
let error = false;

const maxLength = 14;

const output = document.querySelector("#output");
const digitButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector("#clear");
const equalButton = document.querySelector("#equal");
const decimalButton = document.querySelector("#decimal");
const negationButton = document.querySelector("#negation");

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
        return "MATH ERROR";
    }
    return num1 / num2;
}

function operate(num1, num2, op) {
    if (op === "+") {
        return add(num1, num2);
    } else if (op === "-") {
        return subtract(num1, num2);
    } else if (op === "*") {
        return multiply(num1, num2);
    } else if (op === "/") {
        return divide(num1, num2);
    } else {
        error = true;
        return "OPERATOR ERROR";
    }
}

digitButtons.forEach((digitButton) => {
    digitButton.addEventListener("click", (e) => {
        if (!error) {
            let digit = e.target.textContent;
            if (op !== "" && num1 === null) {
                num1 = Number.parseFloat(display);
                display = "0";
            }
            if (display === "0") {
                display = digit;
            } else {
                if (display.length < maxLength) {
                    display = display + digit;
                }
            }
            output.textContent = display;
        }
    });
});

operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener("click", (e) => {
        if (!error) {
            let operator = e.target.textContent;
            if (num1 === null) {
                op = operator;
            } else {
                num2 = Number.parseFloat(display);
                let result = operate(num1, num2, op);
                display = `${result}`;
                num1 = null;
                num2 = null;
                op = operator;
            }
            output.textContent = display;
        }
    });
});

clearButton.addEventListener("click", () => {
    num1 = null;
    num2 = null;
    op = "";
    error = false;
    display = "0";
    output.textContent = display;
});

equalButton.addEventListener("click", () => {
    if (!error) {
        if (num1 !== null) {
            num2 = Number.parseFloat(display);
            let result = operate(num1, num2, op);
            display = `${result}`;
            num1 = null;
            num2 = null;
        }
        op = "";
        output.textContent = display;
    }
});

decimalButton.addEventListener("click", () => {
    if (!error) {
        if (op !== "" && num1 === null) {
            num1 = Number.parseFloat(display);
            display = "0";
        }
        if (!display.includes(".")) {
            display = display + ".";
        }
        output.textContent = display;
    }
});

negationButton.addEventListener("click", () => {
    if (!error) {
        if (op !== "" && num1 === null) {
            num1 = Number.parseFloat(display);
            display = "0";
        }
        if (display !== "0") {
            if (display[0] === "-") {
                display = display.slice(1);
            } else {
                display = "-" + display;
            }
        }
        output.textContent = display;
    }
});