function countSymbol() {
    var str;
    str='ds sd sdd ss dd ddf ff daa '
    var countSymbol;
    countSymbol= {};
      for(i=0;i<str.length;i++){
        var count = 0;
        for(j=0;j<str.length;j++){
          if(str[i] === str[j]){
            count++;
          }
        }
        if(!countSymbol.hasOwnProperty(str[i])){
            countSymbol[str[i]] = count;
        }
      }

    return countSymbol;
  }
console.log(countSymbol());