const repeatString = function (word, times) {
  if (times < 0) return "ERROR";
  let str = "";
  for (let i = 0; i < times; i++) {
    str += word;
  }
  return str;
  // possible solution also without loops
  // return word.repeat(times);
};

// Do not edit below this line
module.exports = repeatString;
