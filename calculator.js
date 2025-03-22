function display(value) {
    document.getElementById("result").value += value;
}

function clearScreen() {
    document.getElementById("result").value = "";
}

function clearOne() {
    let currentValue = document.getElementById("result").value;
    document.getElementById("result").value = currentValue.slice(0, -1);
}


function calculate() {
    try {
        const expression = document.getElementById("result").value;
        const result = Function(`'use strict'; return (${expression})`)();
        document.getElementById("result").value = result;
    } catch (e) {
        document.getElementById("result").value = "Error";
    }
}

function square() {
    try {
        let value = document.getElementById("result").value;
        document.getElementById("result").value = Math.pow(parseFloat(value), 2);
    } catch (e) {
        document.getElementById("result").value = "Error";
    }
}

function remainder() {
    try {
        let expression = document.getElementById("result").value;
        if (expression.includes("%")) {
            let numbers = expression.split("%");
            let result = parseFloat(numbers[0]) % parseFloat(numbers[1]);
            document.getElementById("result").value = result;
        } else {
            document.getElementById("result").value = "Error";
        }
    } catch (e) {
        document.getElementById("result").value = "Error";
    }
}
