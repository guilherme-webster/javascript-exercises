const add = function(a,b) {
	return a + b;
};

const subtract = function(a , b) {
	return a - b;
};

const sum = function(array) {
	return total = array.reduce((prev, element) => prev + element, 0)
};

const multiply = function(array) {
  return total = array.reduce((prev, element) => prev * element, 1)
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
	var fact = 1;
  for(let i = 1; i < n + 1; i++){
    fact *= i;
  }
  return fact;
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
