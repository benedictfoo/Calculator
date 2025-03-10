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
  numbers: ["", ""],
  operator: null,
  addClearEvent() {
    document
      .querySelector("#calculator-clear")
      .addEventListener("click", (e) => {
        document.querySelector("#calculator-screen").dataset.screen = "0";
        this.numbers = ["", ""];
        this.operator = null;
      });
  },
  addDigitEvent() {
    document
      .querySelector("#calculator-left-group")
      .addEventListener("click", (e) => {
        const target = e.target;
        if (target.classList.contains("calculator-digit")) {
          console.log(target.dataset.digit);
        } else if (target.id === "calculator-decimal") {
          console.log(target.dataset.decimal);
        }
      });
  },
  addOperatorEvent() {
    document
      .querySelector("#calculator-side-group")
      .addEventListener("click", (e) => {
        const target = e.target;
        console.log(this.operator);

        if (this.operator === null) {
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
            default:
              break;
          }
        }
        console.log(this.operator);
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
