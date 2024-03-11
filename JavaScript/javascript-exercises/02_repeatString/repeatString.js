const repeatString = function (word, times) {
  if (times < 0) return "ERROR";

  return word.repeat(times);
};

console.log(repeatString("", 10));
// Do not edit below this line
module.exports = repeatString;
