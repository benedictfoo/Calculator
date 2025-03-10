const calculator = {
  initializeLeftGroupItems() {
    const leftGroup = document.querySelector("#calculator-left-group");
    const btnDigits = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."];
    btnDigits.forEach((digit) => {
      if (digit === ".") {
        const decimal = document.createElement("button");
        decimal.textContent = ".";
        decimal.dataset.decimal = ".";
        decimal.setAttribute("id", "calculator-decimal");
        leftGroup.appendChild(decimal);
      } else {
        const button = document.createElement("button");
        button.setAttribute("class", "calculator-digit");
        button.textContent = digit;
        button.dataset.digit = digit;
        leftGroup.appendChild(button);
      }
    });
  },
  numbers: ["0", ""],
  operator: null,
  decimalAdded: false,
  addClearEvent() {
    document
      .querySelector("#calculator-clear")
      .addEventListener("click", () => this.clear());
  },
  clear() {
    const screen = document.querySelector("#calculator-screen");
    this.numbers = ["0", ""];
    this.operator = null;
    this.decimalAdded = false;
    screen.dataset.screen = this.numbers[0];
    document
      .querySelectorAll("#calculator-side-group button")
      .forEach((button) => button.classList.remove("active"));
  },
  addDigitEvent() {
    document
      .querySelector("#calculator-left-group")
      .addEventListener("click", (e) => {
        const screen = document.querySelector("#calculator-screen");
        const target = e.target;
        const addToArray = (index) => {
          if (target.classList.contains("calculator-digit")) {
            if (this.numbers[index] === "0") {
              this.numbers[index] = "";
            } else {
            }
            this.numbers[index] += target.dataset.digit;
          } else if (target.id === "calculator-decimal") {
            if (!this.decimalAdded) {
              this.decimalAdded = true;
              this.numbers[index] += ".";
            }
          }
          screen.dataset.screen = this.numbers[index];
        };
        // If no operator add to first
        if (this.operator === null) {
          addToArray(0);
        }

        // Else add to second
        else {
          addToArray(1);
        }
      });
  },
  getResult(secondOperator) {
    const screen = document.querySelector("#calculator-screen");
    // store the result of first and second
    //  if secondoperator = "="

    const firstNum = +this.numbers[0];
    const secondNum = +this.numbers[1];

    if (this.operator === "=") {
      this.numbers[0] = this.numbers[1];
    } else if (this.operator === "+") {
      this.numbers[0] = firstNum + secondNum;
    } else if (this.operator === "-") {
      this.numbers[0] = firstNum - secondNum;
    } else if (this.operator === "*") {
      this.numbers[0] = firstNum * secondNum;
    } else if (this.operator === "/") {
      this.numbers[0] = firstNum / secondNum;
    } else if (this.operator === "%") {
      this.numbers[0] = firstNum % secondNum;
    }
    screen.dataset.screen = this.numbers[0];
    this.numbers[1] = "";
    this.decimalAdded = false;
    if (secondOperator === "=") {
      this.operator = null;
    } else if (secondOperator !== "=") {
      this.operator = secondOperator;
    }
    document
      .querySelectorAll("#calculator-side-group button")
      .forEach((button) => button.classList.remove("active"));
    // clear the calc values and store result as first
    // if operator is not'=' store it as operator
  },
  addOperatorEvent() {
    document.querySelector("#calculator").addEventListener("click", (e) => {
      const target = e.target;
      if (target.dataset.operator === "change-sign") {
        const changeSign = (index) => {
          const screen = document.querySelector("#calculator-screen");
          if (this.operator !== null) {
            return;
          } else if (this.numbers[index] && this.numbers[index][0] === "-") {
            this.numbers[index] = this.numbers[index].slice(1);
          } else if (this.numbers[index]) {
            this.numbers[index] = `-${this.numbers[index]}`;
          }
          screen.dataset.screen = this.numbers[index];
        };
        if (this.numbers[1]) {
          changeSign(1);
        } else if (this.numbers[0]) {
          changeSign(0);
        }
      } else if (this.operator === null) {
        switch (target.dataset.operator) {
          case "/":
            this.operator = "/";
            break;
          case "*":
            this.operator = "*";
            break;
          case "-":
            this.operator = "-";
            break;
          case "+":
            this.operator = "+";
            break;
          case "=":
            this.operator = "=";
            break;
          case "%":
            this.operator = "%";
          default:
        }
        if (target.dataset.operator) {
          target.classList.add("active");
        }
      } else if (target.dataset.operator) {
        this.getResult(target.dataset.operator);
      }
    });
  },

  checkOperatorPressed() {
    return this.operator;
  },
  checkFirstNumberStored() {
    return this.numbers[0];
  },
};
calculator.initializeLeftGroupItems();
calculator.addClearEvent();
calculator.addDigitEvent();
calculator.addOperatorEvent();
