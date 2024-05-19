const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (array) => {
  return array.reduce((acc, item) => acc + item, 0);
};

const multiply = (array) => {
  return array.reduce((acc, item) => acc * item);
}

const power = (base, exp) => base ** exp;

const factorial = (num) => {
	if (num === 0) return 1;

  result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
