class Calculator {
  constructor(previousOperanTextElement, currentOperandTextElement) {
    this.previousOperanTextElement = previousOperanTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
  }

  clear() {}

  delete() {}

  appendNumber(number) {}

  chooseOperation(operation) {}
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperanTextElement = document.querySelector(
  "[data-previous-operand]"
);

const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);
