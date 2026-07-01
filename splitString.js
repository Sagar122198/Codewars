function solution(str){
  let result = [] ;
   if(str.length%2 == 0 && str.length != 0){
     let result = str.match(/.{1,2}/g);
     return result;
     } else if (str.length==0){
       return []
     }
     
   else{
     str= str.concat("_")
     let result = str.match(/.{1,2}/g);
     return result; 
     }
  }