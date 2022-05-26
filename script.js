const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const calcDisplay = document.querySelector('.screen');
const equalButton = document.querySelector('.equal');
let firstOperand = '';
let secondOperand = '';
let result = '';
let firstTime = true;
let operation = [];

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '÷':
      return a / b;
  }
}

numberButtons.forEach((element) => {
  element.addEventListener('click', function () {
    if (firstTime) {
      firstOperand += this.textContent;
      calcDisplay.textContent = firstOperand;
      operation.push(firstOperand);
    } else {
      secondOperand += this.textContent;
      calcDisplay.textContent = secondOperand;
      operation.push(secondOperand);
    }
  });
});

operatorButtons.forEach((element) => {
  element.addEventListener('click', function () {
    operation.push(this.textContent);
    calcDisplay.textContent = this.textContent;
    firstTime = false;
  });
});

equalButton.addEventListener('click', function () {
  console.log(operation);
  result = operate(operation[1], operation[0], operation[2]);
  calcDisplay.textContent = result;
});
