function myCompare(Object,String){
    myObject;
    myObject={
        age:21,
        Name:"Dima",
        Country:"Russia"
    }
    
    var myBoolean;
    myBoolean= false;
    var newProperty;
    newProperty="new";
  
    for( var key in myObject)
    {
       if(myObject.key!=newProperty)
        {
            myObject.newProperty=newProperty;
        }
       
    }
    return myObject;
    }
    console.log(myCompare());