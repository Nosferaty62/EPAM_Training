function someString(){
    var str;
    myBoolean=false;
    str= "for exmaple "
    if(str.indexOf("el")+1){
        myBoolean=true;
    }
    return myBoolean;
}
console.log(someString());