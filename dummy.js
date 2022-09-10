

function mergeSort(array){
    if(array.length <=1){
        return array
    }
    let middleIndex = Math.floor(array.length/2);
    let leftArray = array.slice(0,middleIndex);
    let rightArray = array.slice(middleIndex);
    return sortArray(mergeSort(leftArray), mergeSort(rightArray))

}

function sortArray(first, second){
let leftIndex = 0;
let rightIndex = 0;
let array = [];
while(leftIndex < first.length && rightIndex < second.length){
    let leftEl = first[leftIndex];
    let rightEl = second[rightIndex];
    if(leftEl < rightEl){
      array.push(leftEl)
      leftIndex++
    }else{
        array.push(rightEl)
        rightIndex++
    }

}
return   [...array, ...first.slice(leftIndex), ...second.slice(rightIndex)]
}

// console.log(mergeSort([2,1,7,3,9,5]))
while(true){
    console.log("SSSSSSSSSS")
    return
}