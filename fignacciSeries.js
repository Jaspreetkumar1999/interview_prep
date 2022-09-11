function fibnacci(n){
  if(n == 1){
    return [0,1]
  }

  let number = fibnacci(n-1)
//   console.log(number)
   number.push( number[number.length -1] + number[number.length -2])
   return number
  
}

function fibNumber(n){
    if(n < 2){
        return n
    }
    return fibNumber(n-1) + fibNumber(n-2)
}
console.log(fibNumber(6))
// 0,1,1,2,3