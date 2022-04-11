let currentOperation = null;
let firstOperand = '';
let secondOperand = '';
let shouldResetScreen = false;

const numberButtons = document.querySelectorAll('.numbers');
const operatorButtons = document.querySelectorAll('.operators');
const currentOperationScreen = document.getElementById('currentOperation');
const shadowOperationScreen = document.getElementById('shadowOperation');
const equalButton = document.getElementById('equal');
const clearButton = document.getElementById('clear');

equalButton.addEventListener('click', evaluate);
clearButton.addEventListener('click', clear);

numberButtons.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.textContent))
);

operatorButtons.forEach((button) =>
  button.addEventListener('click', () => setOperation(button.textContent))
);

function appendNumber(number) {
  if (currentOperationScreen.textContent === '0' || shouldResetScreen)
    resetScreen();
  currentOperationScreen.textContent += number;
}

function resetScreen() {
  currentOperationScreen.textContent = '';
  shouldResetScreen = false;
}

function setOperation(operator) {
  if (currentOperation !== null) evaluate();
  firstOperand = currentOperationScreen.textContent;
  currentOperation = operator;
  shadowOperationScreen.textContent = `${firstOperand} ${currentOperation}`;
  shouldResetScreen = true;
}

function evaluate() {
  if (currentOperation === null || shouldResetScreen) return;
  if (currentOperation === '÷' && currentOperationScreen.textContent === '0') {
    alert('Cannot divide by zero');
    return;
  }
  secondOperand = currentOperationScreen.textContent;
  currentOperationScreen.textContent = operate(
    currentOperation,
    firstOperand,
    secondOperand
  );
  shadowOperationScreen.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`;
  currentOperation = null;
}

function clear() {
  firstOperand = '';
  secondOperand = '';
  currentOperation = null;
  currentOperationScreen.textContent = '0';
  shadowOperationScreen.textContent = '';
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case 'x':
      return multiply(a, b);
    case '÷':
      if (b === 0) return null;
      else return divide(a, b);
    default:
      return null;
  }
}
