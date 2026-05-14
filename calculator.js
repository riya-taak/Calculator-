var display = document.getElementById("a");

function pick(value) {
    let current = display.value.trim();
    let operators = ['+', '-', '*', '/'];
    let lastChar = current[current.length - 1];

    // agar start mein operator dabaya
    if (current === "" && operators.includes(value)) {
        return;
    }

    // agar last char bhi operator hai aur naya bhi operator hai
    if (operators.includes(lastChar) && operators.includes(value)) {
        return;
    }

    // dot ke liye check
    if (value === ".") {
        let parts = current.split(/[\+\-\*\/]/);
        let lastPart = parts[parts.length - 1];

        if (lastPart.includes(".")) {
            return;
        }

        if (lastPart === "") {
            display.value += "0.";
            return;
        }
    }

    display.value += value;
}

function solve() {
    try {
        let x = display.value.trim();
        if (x === "") return;
        let y = eval(x);
        display.value = y;
    } catch (e) {
        // ✅ Invalid expression handle
        display.value = "Error";
        setTimeout(() => display.value = "", 1000);
    }
}

function clr() {
    // ✅ Space bug fix — pehle " " tha, ab "" hai
    display.value = "";
}

function dlt() {
    display.value = display.value.slice(0, -1);
}