const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	result = 0;
  for (const num of array) {
    result += num;
  }
  return result;
};

const multiply = function(array) {
  result = 1;
  for (const num of array) {
    result *= num;
  }
  return result;
};

const power = function(base, exp) {
	return base ** exp;
};

const factorial = function(num) {
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
