function upFirstSymbol(){
    var str;
    str= "for exmaple "
    str=str[0].toUpperCase()+str.slice(1);
    return str;
}
console.log(upFirstSymbol());