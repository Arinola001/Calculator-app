let display = document.getElementById("display");

function appendValue(value) {
  if (display.textContent === "0") {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

function clearDisplay() {
  display.textContent = "0";
}

function toggleSign() {
  let currentValue = parseFloat(display.textContent);
  if (!isNaN(currentValue)) {
    display.textContent = currentValue * -1;
  }
}

function percentage() {
  let currentValue = parseFloat(display.textContent);
  if (!isNaN(currentValue)) {
    display.textContent = currentValue / 100;
  }
}

function calculate() {
  try {
    display.textContent = eval(display.textContent);
  } catch (error) {
    display.textContent = "Error";
  }
}
