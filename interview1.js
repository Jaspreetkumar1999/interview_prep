
Write a method called ‘sum’ which will give out as follows

sum(1)(2,3)(4,5,6) → output = 1+2+3+4+5+6
sum(1,2)(3)(4)(5,6) -> output = 1+2+3+4+5+6


//////////////

let flag = true;
setTimeout(function(){
         
        flag = false;
}, 2000);

while(flag) {
        console.log(`While loop`);
}

////////////////

const array = [1,2,3,4];
for(var i=0; i < array.length; i++) {
  setTimeout(function(){
    console.log('I am at index ' + i)
  }, 3000)
}

////////////////

const promise = new Promise((resolve, reject) => {
    resolve("success");
});

promise
.then((result) => {
    console.log(result);
    return 1;
})
.finally((finallyRes) => {
    console.log(`finally called`, finallyRes);
    return "finally";
})
.then((result1) => {
    console.log(`result1: `, result1);
    return "then 2";
})
.catch(() => {
    return "Catch";
});


/////////////////////////

const pokemon = {
  firstname: 'Pika',
  lastname: 'Chu ',
  getPokeName: function() {
    var fullname = this.firstname + ' ' + this.lastname;
    console.log(fullname)
  }
};

const pokemon2 = {
  firstname: 'Bulba',
  lastname: 'Saur'
}

pokemon.getPokeName();


/////////////////////////

Const api1 = Promise.resolve(1);
Const api2 = Promise.reject(2);
Const api3 = Promise.resolve(3);
Const api4 = Promise.reject(5);
Const api5 = Promise.resolve(5);


