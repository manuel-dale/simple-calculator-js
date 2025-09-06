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