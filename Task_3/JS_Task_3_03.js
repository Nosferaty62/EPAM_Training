function myCompare(Object,String){

 var myObject={
    age:21,
    Name:"Dima",
    Country:"Russia"
}


var myString;
//myString="dsfd";
myString="Country";

for( var keys in myObject){
    
    toString:keys;
    if(keys==myString){
        myBoolean=true;
    }
}
return myBoolean;
}
console.log(myCompare());