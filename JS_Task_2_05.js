function maxElement(){

    var mass;
    mass=[1,2,3,45,];
    var maxElement;
    for(i=0; i<mass.length;i++){
        maxElement=mass[0];
        if(maxElement<mass[i]){
            maxElement=mass[i];
        }
    }
    return maxElement;
}
console.log(maxElement());