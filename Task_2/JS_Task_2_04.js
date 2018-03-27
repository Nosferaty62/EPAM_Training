function sameElements(){
    var myMass;
    var myBoolean=true;
    myMass=[0,0,0,1];
    for(i=0; i<myMass.length;i++){
       if(myMass[0]!=myMass[i])
       {
        myBoolean=false;
       }
    }
   console.log("Элементы одинаковые?"+ " " + myBoolean);
   return myBoolean;
}
console.log(sameElements());