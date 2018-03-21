function StringStat(str)
{
    var str;
    str="may be its, true example";
     var Arr=new Array();
     for(i=0; i<=str.length; i++){
         if(str.join(" ").charArt(i)){
             Arr[i]++;
         }
     }
     return Arr[i];
    }
    console.log(StringStat("may be its, true example"))

