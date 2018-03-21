function stringOuter(String, Number)
{   this.Number =Number;
    this.String= String;
    var myNumber=this.Number;
    var myString=this.myString;
    myNumber=3;
     myString="4 символа и три точки. ";
     subString="dddd";
     subString=subString.split(' ');
    // myNumber=4;
    // myString="1 символ и три точки";
    //myNumber=3;
    //myString="три точки";
    myString=myString.split(' ');
    //for(i=0; i<=myString.length;i++){
      //if(myString[i]==myNumber){
           myString=mystring.concat(myString+subString);
      //}
    // }
    
    return myString;


}
console.log(stringOuter());