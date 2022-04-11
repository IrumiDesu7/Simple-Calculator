const numberButtons = document.querySelectorAll('.numbers');
const currentOperation = document.querySelector('.current-operation');
const clearButton = document.querySelector('.backspace');
const equalButton = document.querySelector('.equal');
const operatorButtons = document.querySelectorAll('.operators');
currentOperation.textContent = 0;
let liveOperation = ''; //The on-going operation, only works on 1 operation
let shadowOperation = ''; //Kind of like the history of the whole operations
let firstOperand = '';
let secondOperand = '';
let operationArray = [];

numberButtons.forEach((e) => {
  e.addEventListener('click', function showNumber() {
    if (currentOperation.textContent == 0) {
      currentOperation.textContent = currentOperation.textContent.replace(
        '0',
        ''
      );
    }
    liveOperation = currentOperation.textContent += e.textContent;
    // console.log(liveOperation);
  });
});

operatorButtons.forEach((e) => {
  e.addEventListener('click', function () {
    operationArray.push(liveOperation);
    operationArray.push(e.textContent);
    currentOperation.textContent = 0;
    console.log(operationArray);
  });
});

equalButton.addEventListener('click', function () {
  operationArray.push(liveOperation);
  operator = operationArray[1];
  a = operationArray[0];
  b = operationArray[2];
  currentOperation.textContent = operate(operator, a, b);
});

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
  return a - b;
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
      return divide(a, b);

    default:
      return null;
  }
}
