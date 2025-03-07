const calculator = {
  initializeMainGroupItems() {
    const mainGroup = document.querySelector("#calculator-left-main-group");

    for (let i = 0; i < 10; i++) {
      const digit = document.createElement("button");
      digit.textContent = i;
      digit.dataset.digit = i;
      mainGroup.appendChild(digit);
      if (i === 0) {
        const decimal = document.createElement("button");
        decimal.textContent = ".";
        decimal.setAttribute("id", "calculator-decimal");
        mainGroup.appendChild(decimal);
      }
    }
  },
};
calculator.initializeMainGroupItems();
