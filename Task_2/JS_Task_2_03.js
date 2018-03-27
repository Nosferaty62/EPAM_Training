function findCountElements(){

    var myMas;
        myMas=[1,2,3,4,5,0,6,0];

    var myCountEven;
        myCountEven=0;

    var myCountOdd;
        myCountOdd=0;
    
    var myCountNull;
        myCountNull=0;

        for(i=0; i<myMas.length;i++){
            if(myMas[i]%2==0 && myMas[i]!=0){
                myCountEven++;
            } 
            if(myMas[i]%2 !==0 && myMas[i]!=0)
            {
                myCountOdd++
            }
            if(myMas[i]==0)
            {
                myCountNull++

            }
   
}
console.log("количество четных"+ " " + myCountEven);
console.log("количество нечетных"+ " " + myCountOdd);
console.log("количество 0"+ " " + myCountNull);
return myMas;
}
console.log(findCountElements());