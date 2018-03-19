function myCompare(Object,String){
myObject=this.Object;
myObject={
    age:21,
    Name:"Dima",
    Country:"Russia"
}

var myBoolean;
myBoolean= false;
var myString=this.String;
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