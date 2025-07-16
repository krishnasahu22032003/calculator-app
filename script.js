const display = document.getElementById('display');

function append(char) {
  display.value += char;
}

function clearDisplay() {
  display.value = '';
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

function sqrt() {
  try {
    display.value = Math.sqrt(eval(display.value));
  } catch {
    display.value = 'Error';
  }
}

function square() {
  try {
    display.value = Math.pow(eval(display.value), 2);
  } catch {
    display.value = 'Error';
  }
}

function power() {
  display.value += '**';
}

function inverse() {
  try {
    display.value = 1 / eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

function toggleSign() {
  try {
    display.value = eval(display.value) * -1;
  } catch {
    display.value = 'Error';
  }
}
