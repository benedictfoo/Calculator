const calculator = {
  initializeLeftGroupItems() {
    const leftGroup = document.querySelector("#calculator-left-group");
    const btnDigits = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."];
    btnDigits.forEach((digit) => {
      if (digit === ".") {
        const decimal = document.createElement("button");
        decimal.textContent = ".";
        decimal.setAttribute("id", "calculator-decimal");
        leftGroup.appendChild(decimal);
      } else {
        const button = document.createElement("button");
        button.setAttribute("class", "calculator-digit");
        button.textContent = digit;
        button.dataset.button = digit;
        leftGroup.appendChild(button);
      }
    });
  },
};
calculator.initializeLeftGroupItems();
