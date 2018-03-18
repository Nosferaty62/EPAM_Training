function myFunction(){
    
    var result;
    var myNumber=1;
    //var myNumber="1";
     if(myNumber.toFixed)
     {
        result=console.log("это число");
     }else
       
        { 
            result=  console.log(" это строка")
        }
        return result;
}
console.log(myFunction());