function recuringFirst(str){
    let obj = {}
    for(let i =0; i< str.length; i++){
     if(!obj[str[i]]){
        obj[str[i]] = 1
     }
     else{
        obj[str[i]] =  obj[str[i]]+1
     }
     if(obj[str[i]] ==2){
        return str[i]
     }
    }
    // console.log(obj)
}
console.log(recuringFirst([4,3,4,5,1,4]))