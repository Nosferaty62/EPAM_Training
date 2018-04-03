var calculator = {
  result :0,
  sum: function summary(a,b) { 
    this.result =a+b;
    return this.result;
    
  },
  dif: function difference(a, b) {
    this.result =a - b;
    return this.result;
  },
  mult: function multiply(a, b) {
    this.result =a * b;
    return this.result;
  },
  div: function divide(a, b) {
    this.result =a / b;
    return this.result;
  },
  res: function reset(){
    this.result=0;
   return this.result;
  },
  getResl: function getResult(a,b){
    
    this.result= this.result;
    return this.result;
  }
};

console.log(calculator.sum(1,2));
console.log(calculator.dif(1,2));
console.log(calculator.mult(1,2));
console.log(calculator.div(1,2));
console.log(calculator.getResl());
console.log(calculator.res());

