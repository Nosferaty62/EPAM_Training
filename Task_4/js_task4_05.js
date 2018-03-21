function stringOuter()
{  
    var myNumber=this.Number;
    var myString=this.myString;
    myNumber=8;
     myString="4 символа и три точки";
    // myNumber=4;
    // myString="1 символ и три точки";
    //myNumber=3;
    //myString="три точки";
    myString=myString.split('',myNumber);
    for(i=0; i<=myString.length;i++){

        myString[myString.length-3]=".";
        myString[myString.length-2]=".";
        myString[myString.length-1]="."
    }
    return myString.join(" ");


}
console.log(stringOuter());