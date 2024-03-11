const reverseString = function (str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
  // possible solution without loops
  // return str.split("").reverse().join("");
};

console.log(reverseString("!cba !321"));
// Do not edit below this line
module.exports = reverseString;
