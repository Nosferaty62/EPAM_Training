function someString(){
    var str;
    str= " for exmaple "
    var str1=new Array();
    str1=str.split(" ");
    
    for(i=0; i<=str1.length;i++)
    {
        str[i]=str1[i].toUpperCase();
        
    }
    return str1.join(" ");
}
console.log(someString());