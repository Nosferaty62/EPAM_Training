function jobWithArray(){
    var myMass;
    myMass=[1,2,3,4,5];
    for(i=0; i<myMass.length;i++){
        console.log(myMass[i] + " ");
       
    }
    console.log("Длина массива"+ " " + myMass.length);
    return myMass;
}
console.log(jobWithArray());