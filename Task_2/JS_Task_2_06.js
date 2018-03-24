
mass=[1,'7',"8",'6',1];

function myTransformation(mass){
  
    for(i=0; i<mass.length;i++){
       
        if(mass[i]!=Number)
        {
            mass[i]=Number(mass[i]);
        }
        
    }
    return mass;
}
console.log(myTransformation(mass));