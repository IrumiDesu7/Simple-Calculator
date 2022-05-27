const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const calcDisplay = document.querySelector('.screen');
const resultDisplay = document.querySelector('.result');
const equalButton = document.querySelector('.equal');
const clearButton = document.querySelector('.clear');
const backspaceButton = document.querySelector('.backspace');
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

const clearAll = () => {
  firstOperand = '';
  secondOperand = '';
  result = '';
  firstTime = true;
  operationOnGoing = false;
  operation = [];
  calcDisplay.textContent = '|';
  resultDisplay.textContent = '|';
};

clearButton.addEventListener('click', clearAll);

backspaceButton.addEventListener('click', (e) => {
  if (operation.length > 1) {
    calcDisplay.textContent = calcDisplay.textContent.slice(0, -1);
    secondOperand = `${secondOperand}`;
    secondOperand = secondOperand.slice(0, -1);
    resultDisplay.textContent = result = operate(
      operation[1],
      operation[0],
      secondOperand
    );
  } else {
    firstOperand = calcDisplay.textContent = calcDisplay.textContent.slice(
      0,
      -1
    );
  }
});

numberButtons.forEach((element) => {
  element.addEventListener('click', function () {
    if (firstTime) {
      firstOperand += this.textContent;
      calcDisplay.textContent = firstOperand;
    } else {
      secondOperand += this.textContent;
      calcDisplay.textContent = `${firstOperand} ${operation[1]} ${secondOperand}`;
      resultDisplay.textContent = result = operate(
        operation[1],
        operation[0],
        secondOperand
      );
      operationOnGoing = true;
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
      firstOperand = result;
      secondOperand = '';
      operation = [result];
      operation.push(this.textContent);
      calcDisplay.textContent = `${firstOperand} ${this.textContent}`;
    }
  });
});

equalButton.addEventListener('click', function () {
  operation.push(secondOperand);
  result = operate(operation[1], operation[0], operation[2]);
  calcDisplay.textContent = result;
  resultDisplay.textContent = '|';
  firstOperand = result;
  secondOperand = '';
  operation = [`${result}`];
  operationOnGoing = true;
});

// This commented section was used for debugging. Might delete it later, or not.
document.addEventListener('click', () => {
  console.log('first operand : ', firstOperand);
  console.log('second operand : ', secondOperand);
  console.log('operation array : ', operation);
  //   console.log('is this the first operation : ', firstTime);
  //   console.log('is the operation on going : ', operationOnGoing);
  //   console.log('current result : ', result);
});
