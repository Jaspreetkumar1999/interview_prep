function bubbleSort(array){
    let sortedArray = []
    if (array.length <=1){
     return array
    }
    for(let i = 0; i< array.length; i++){
      for(let j = 0; j<(array.length-i-1);j++){
       if(array[j] > array[j+1]){
        let temp = array[j]
        array[j] = array[j + 1]
        array[j+1] = temp
       }
      }
    }
    return array
}
console.log(bubbleSort([11,12,45,34,17,2,3,1,6,10,9,7,6]))