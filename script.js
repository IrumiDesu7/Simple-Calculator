const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const calcDisplay = document.querySelector('.screen');
const resultDisplay = document.querySelector('.result');

const equalButton = document.querySelector('.equal');
const clearButton = document.querySelector('.clear');
let firstOperand = '';
let secondOperand = '';
let result = '';
let firstTime = true;
let operationOnGoing = false;
let operation = [];

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case 'x':
      return a * b;
    case '÷':
      return a / b;
  }
}

clearButton.addEventListener('click', function () {
  firstOperand = '';
  secondOperand = '';
  result = '';
  firstTime = true;
  operation = [];
  calcDisplay.textContent = 0;
});

numberButtons.forEach((element) => {
  element.addEventListener('click', function () {
    if (firstTime) {
      firstOperand += this.textContent;
      calcDisplay.textContent = firstOperand;
    } else {
      secondOperand += this.textContent;
      calcDisplay.textContent = `${firstOperand} ${operation[1]} ${secondOperand}`;
    }
  });
});

operatorButtons.forEach((element) => {
  element.addEventListener('click', function () {
    if (!operationOnGoing) {
      operation.push(firstOperand);
      operation.push(this.textContent);
      calcDisplay.textContent = `${firstOperand} ${this.textContent}`;
      firstTime = false;
    } else {
      operation.push(this.textContent);
      calcDisplay.textContent = `${firstOperand} ${this.textContent}`;
      firstTime = false;
    }
  });
});

equalButton.addEventListener('click', function () {
  operation.push(secondOperand);
  result = operate(operation[1], operation[0], operation[2]);
  calcDisplay.textContent = result;
  firstOperand = result;
  secondOperand = '';
  operation = [result];
  firstTime = true;
  operationOnGoing = true;
});

document.addEventListener('click', () => console.log(operation));
