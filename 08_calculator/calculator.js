const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, nextNum) => {
    total += nextNum;
    return total;
  }, 0);
};

const multiply = function(array) {
  return array.reduce((total, nextNum) => {
    total *= nextNum;
    return total; 
  }, 1);
};

const power = function(num, power) {
  return num ** power;
};

const factorial = function(num) {
  if (num === 0 || num === 1) return 1;

  let result = num;
  while (num > 1) {
    num--;
    result *= num;
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
