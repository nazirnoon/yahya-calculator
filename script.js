let expression = '';

function inputValue(value) {
    if(expression.length < 1 && (value === '+' || value === '-' || value === '*' || value === '/')) {
        // Prevents adding operators right at the start
        return;
    }
    expression += value;
    document.getElementById('display').innerText = expression;
}

function calculateResult() {
    try {
        // "eval" evaluates the string expression and calculates the result
        const result = eval(expression);
        // Display the result
        document.getElementById('display').innerText = result;
        // Prepare for the next calculation
        expression = result.toString();
    } catch (error) {
        // If an error occurs (e.g. invalid expression), show Error
        document.getElementById('display').innerText = 'Error';
        expression = '';
    }
}

function clearDisplay() {
    // Clear the expression and reset the display
    expression = '';
    document.getElementById('display').innerText = '0';
}