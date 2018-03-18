function myCompare(Object,String){
    myObject=this.Object;
    myObject={
        age:21,
        Name:"Dima",
        Country:"Russia"
    }
    
    var myBoolean;
    myBoolean= false;
    var newProperty=this.String;
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