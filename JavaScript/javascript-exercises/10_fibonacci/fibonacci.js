const fibonacci = function (count) {
  if (count < 0) return "OOPS";
  if (count == 0) return 0;
  count = parseInt(count);
  let n1 = 1,
    n2 = 0,
    nextTerm;
  for (let i = 2; i <= count; i++) {
    nextTerm = n1 + n2;
    n2 = n1;
    n1 = nextTerm;
  }
  return n1;
};

// Do not edit below this line
module.exports = fibonacci;
