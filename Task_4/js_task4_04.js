function someString(){
    var str;
    str= " for exmaple may be "
    arr=str.split(" ");
    
    str =  arr.map(function(item){
        return  item.charAt(0).toUpperCase()+item.slice(1);
    }).join(" ");
    
    return str;
}
console.log(someString());