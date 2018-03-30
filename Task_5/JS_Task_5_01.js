var calculator = {
  sum: (function summary(a) {
    return function(b) {
      return a + b;
    };
  })(),
  dif: function difference(a, b) {
    return a - b;
  },
  mult: function multiply(a, b) {
    return a * b;
  },
  div: function divide(a, b) {
    return a / b;
  },
  res: function reset(){
    return 0;
  },
  getResl: function getResult(){
    
    return calculator.mult(1,4);
  }
};

console.log(calculator.sum(1,2));
console.log(calculator.dif(1,2));
console.log(calculator.mult(1,2));
console.log(calculator.div(1,2));
console.log(calculator.getResl());
console.log(calculator.res(1,2));

