function mostFrequentItemCount(collection) {
  if(collection.length===0){
    return 0;
  }
  let max=0;
  for (let i = 0 ; i<=collection.length - 1 ; i++){
    let j=0;
    let read= collection[i]
    for(let y = 0 ; y <= collection.length -1 ; y++ ){
      let check= collection[y]
      if(read === check){
        j++
      }
    }
    
    if(j>max){
      max=j;
    } 
    }
  return max;
}