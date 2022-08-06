const merge = (leftArray, rightArray) =>{
      const output = [];
      let leftIndex = 0;
      let rightIndex = 0;
      while(leftIndex < leftArray.length && rightIndex < rightArray.length){
            const leftEl = leftArray[leftIndex];
            const rightEl = rightArray[rightIndex];
            if(leftEl < rightEl){
                 output.push(leftEl)
                 leftIndex++
            }else{
                output.push(rightEl)
                rightIndex++
            }

      }

      return [...output, ...leftArray.slice(leftIndex), ...rightArray.slice(rightIndex)]
}


function mergeSort(array){
    if(array.length <= 1){
     return array
    }
   const middleIndex = Math.floor(array.length/2);
   const leftArray = array.slice(0, middleIndex);
   const rightArray = array.slice(middleIndex)
   
    
   return merge(
    mergeSort(leftArray),
    mergeSort(rightArray)
   )
  
}
 
console.log(mergeSort([1,4,5,3,2,11,9]))


