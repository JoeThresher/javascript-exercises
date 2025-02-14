const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (x) {
  return x.reduce((accumulator, number) => accumulator + number, 0);
};

const multiply = function (x) {
  return x.reduce((accumulator, number) => accumulator * number, 1);
};

const power = function (x, y) {
  return Math.pow(x, y);
};

const factorial = function (x) {
  let fact = 1;
  for (let i = x; i > 0; i--) {
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
  factorial,
};
