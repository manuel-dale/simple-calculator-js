function appendNumber(number) {
    document.getElementById('display').value += number;
}

function appendOperator(operator) {
    const display = document.getElementById('display');
    if (display.value === '' || display.value.endsWith('+') || display.value.endsWith('-') || display.value.endsWith('*') || display.value.endsWith('/')) {
        return;
    }
    document.getElementById('display').value += operator;
}

function calculateResult() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

document.addEventListener('keydown', function (event) {
    const keyPressed = event.key;
    const validNum = '0123456789';
    const validOper = '+-*/.';
    console.log(keyPressed);

    if (validNum.includes(keyPressed)) {
        appendNumber(keyPressed);
    } else if (validOper.includes(keyPressed)) {
        appendOperator(keyPressed);
    }

    if (keyPressed === 'Backspace') {
        backspace();
    } else if (keyPressed === 'Enter') {
        calculateResult();
    } else if (keyPressed === 'Escape') {
        clearDisplay();
    }
});


