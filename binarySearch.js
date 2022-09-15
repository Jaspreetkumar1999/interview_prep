
function binarSearch(arr,item){
if(arr.length ==1  && arr[0] == item){
    return "FOUND"

}else if (arr.length ==1){
  return "Not FOUND"
}
let middleIndex = Math.floor(arr.length/2)
let leftArray = arr.slice(0, middleIndex)
let rightArray = arr.slice(middleIndex)
if(item < arr[middleIndex]){
   
  return binarSearch(leftArray, item)
}else if(item >= arr[middleIndex]){

  return  binarSearch(rightArray, item)
}
}

console.log(binarSearch([1,2,3,4,5,6], 39))