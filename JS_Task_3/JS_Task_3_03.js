function myCompare(){
var myObject
myObject={
    age:21,
    Name:"Dima",
    Country:"Russia"
}

var myBoolean;
myBoolean= false;
var myString;
//myString="dsfd";
myString="Country";

for( var key in myObject){
    
    toString:key;
    if(key==myString){
        myBoolean=true;
    }
}
return myBoolean;
}
console.log(myCompare());