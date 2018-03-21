function stringOuter()
{ 
    var myNumber;
    var myString;
    myNumber=3;
     myString="4 символа и три точки. ";
     subString="dddd";
     //subString=subString.split(' ');
        myString=myString.split(' ');
    for(i=0; i<=myString.length;i++)
    {
      if(myString[i]==myNumber)
      {
           myString=myString.concat(myString[i+1]+subString[0]);
      }
     }
    
    return myString.join(" ");


}
console.log(stringOuter());