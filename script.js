let display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function clearEntry() {
    display.value = display.value.slice(0, -1);
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value.replace('%', '/100'));
    } catch {
        display.value = "Error";
    }
}
