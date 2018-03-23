
function camelCase(s) {
    var str;
    str= "For exmaple may be "
    arr=str.split(" ");
    
    str =  arr.map(function(item){
        return  item.charAt(0).toLowerCase()+item.toUpperCase().slice(1);
    }).join("");
    
    return str;
  }

console.log(camelCase())