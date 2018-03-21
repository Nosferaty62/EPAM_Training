function someString(){
    var str;
    str= " for exmaple "
    arr=str.split(" ");
    
    // for(i=0; i<=str1.length;i++)
    // {
    //     str[i]=str1[i].toUpperCase();
        
    // }
    str =  arr.map(function(item){
        
    
        return  item.charAt(0).toUpperCase()+item.charAt(1+arr.length);
    }).join(" ");
    
    return str;
}
console.log(someString());