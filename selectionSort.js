function selectionSort(array){
  for(let i = 0; i < array.length; i++){
    
    // if(array[i])
    for(let j = i ; j < array.length-1; j++){
     if(array[i]> array[j+1]){
        let temp = array[j+1]
        array[j+1] = array[i]
        array[i] = temp
     }
    }
  }
  return array
}

console.log(selectionSort([3,2,4,2,9,12,5]))

