(function(){
    console.log("anonymouse");
})(); //IIFE (immediately Invoked function expression) 


//function expression
const fun1 = function(){
    console.log('fun1');
};
fun1();


//arrow function
const fun2 = () => console.log('fun2');
fun2();

/* const sum = function(a,b){
    return a+b;
} */ 

const sum = (a,b) => a+b;
console.log(sum(10,20));

const fun3 = (a,b) => {
    console.log('fun3');
    return a+b;
};
console.log(fun3(10,5));

const square = a => aa;
console.log(square(3));