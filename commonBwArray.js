array1 = ['a','b','c','x']
array2 = ['z','y','i','a']

function convertArrayToObject (array){
    let obj = {}
    for(let item of array){
        obj[item] = true
    }
    return obj
}
array1Obje =  convertArrayToObject(array1)


for(let item of array2){
    if(array1Obje[item]){
        return true
    }
}