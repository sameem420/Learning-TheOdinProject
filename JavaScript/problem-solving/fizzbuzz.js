let userInput = parseInt(
  prompt("Please enter the number you would like to FizzBuzz up to: ")
);

for (let i = 1; i <= userInput; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    document.writeln("FizzBuzz\n");
  } else if (i % 3 == 0) {
    document.writeln("Fizz\n");
  } else if (i % 5 == 0) {
    document.writeln("Buzz\n");
  } else {
    document.write(i, "\n");
  }
}
