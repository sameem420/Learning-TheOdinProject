function add7(number) {
  return number + 7;
}

console.log(add7(5));

function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

console.log(multiply(7, 5));

function capitalize(sentence) {
  return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
}

console.log(capitalize("a big brown fox"));

function lastLetter(str) {
  return str[str.length - 1];
}

console.log(lastLetter("abcd"));
