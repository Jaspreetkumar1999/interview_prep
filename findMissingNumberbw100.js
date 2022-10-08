function sumOfFirstN(n){
    return (n*(n+1))/2
}
// console.log(sumOfFirstN(5))
const array = [1,2,3,4,5,6,7,8,10]

function missingNumber(array, n){
 const sumOfN = sumOfFirstN(n)
 const sumOfArray = array.reduce((a,b) => {return a+b}, 0)
//  console.log(sumOfArray)
return sumOfN - sumOfArray;
}
console.log(missingNumber(array, 10)) 