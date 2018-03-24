var calculator = {
  sum: function summary(a,c) {
    return function(a,b) {
      return a + b;
    };
  },
  dif: function difference(a, b) {
    return a - b;
  },
  mult: function multiply(a, b) {
    return a * b;
  },
  div: function divide(a, b) {
    return a / b;
  }
};

console.log(calculator.sum(1,2));
console.log(calculator.dif(1,2));
console.log(calculator.mult(1,2));
console.log(calculator.div(1,2));

