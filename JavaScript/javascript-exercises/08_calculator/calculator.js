const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (nums) {
  if (nums.length == 0) return 0;
  let computedSum = 0;
  nums.forEach((num) => {
    computedSum += num;
  });
  return computedSum;
};

const multiply = function (nums) {
  if (nums.length == 0) return 0;
  let computedMlpctn = 1;
  nums.forEach((num) => {
    computedMlpctn *= num;
  });
  return computedMlpctn;
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  if (num == 0 || num == 1) return 1;
  return num * factorial(num - 1);
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
