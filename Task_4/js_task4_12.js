function myRandom(max,min){
    return Math.round( Math.random() * (-min+max)+min);
}
console.log(myRandom(0,10));
console.log(myRandom(0,1));  
console.log(myRandom(5,6));  
console.log(myRandom(3,-1)); 