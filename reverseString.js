function reverse(str){
    if(!str || str.length < 2 || typeof str !== 'string'){
    return 
    }
    const backwords = [];
    const totalItems = str.length-1;
    for(let i = totalItems; i>= 0; i--){
        backwords.push(str[i])
    }
    return backwords.join('')
}

console.log(reverse('jaspreet'))