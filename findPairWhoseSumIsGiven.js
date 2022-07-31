let array = [1,2,4,4]
const sum =8
for (let i=0;i<array.length; i++){
   for(let j = i+1; j<array.length; j++){
       if(array[i]+array[j]===8){
     console.log(array[i], array[j])
       }
       console.log("ss",array[i], array[j])
   }
}