function summary(a) {

    return function(b) {
      return a + b;
    };
  
  }
  
console.log(summary(1)(2));