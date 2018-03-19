
function getClone(Obj){
    var Obj;
    Obj=
    {
    age:21,
    Name:"Dima",
    Country:"Russia"
    }
    var clone={};
    
    for (var key in Obj) {
       
        clone[key] = Obj[key];
            
    }
    
    return clone;
}
console.log(getClone());