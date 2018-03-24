myObj={
    age:21,
    Name:"Dima",
    Country:"Russia"
}
var myFunc=function(Object)
{
    for(key in myObj)
    {
        console.log(key + "="+ myObj[key]);
    }
    return myObj;
}

console.log(myFunc());