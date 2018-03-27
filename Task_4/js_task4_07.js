function stringOuter()
{ 
    var myNumber;
    var myString;
    myNumber=3;
     myString="4 символа и три точки. ";
     subString="dddd";
     subString=subString.split(' ');
       // myString=myString.split(' ');
        myString=myString.split(' ',myNumber);
        for(i=0; i<=myString.length;i++){
            if(myString[0 +myNumber]=myNumber){
                myString[i]=subString[0];
            }
           // myString[0 +myNumber]=subString[0];
           // myString[i]=myString[i+1];
            
        }
    
    return myString.join(" ");


}
console.log(stringOuter());