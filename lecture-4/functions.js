//function is set of code which will execute once it calls

//function declaration
function sayHi(){
    console.log('Hi');
    console.log('everyone');
}
sayHi(); // calling a function. without calling a function they function execute or print

console.log(sayHi()); // it will print entry code of that function 

const greet= sayHi;// copy 
greet(); 

//one function we can assign to a variable then that variable will become a function
//const greet = sayHi();
//console.log(greet); //undefind
//reet() //error - greet is not a function(bcz greet is undefined)


//Parameterized function
function sum(num1,num2){ //parameters will pass inside brakets num1 and num2 are the parameters
    console.log(num1 + num2);
}
sum(5,6);

function square(num){
    return num * num;
}
const value = square(3)
console.log(value); // this is one way ti rteun and pinrt
console.log(square(3)); // this is direct way to pass way to return function


function area(radius, precision){
    console.log(precision); // undefined
    return (Math.PI * radius * radius).toFixed(precision); // this toFixed is used to fix the fointer value how much we want, i want . 3 value so 3
}

console.log('area of circle => ',area(4)); // but there it i'll not show any error bcz toFixed passed precision  so default it ll take zero value

//default value passing in parameter
function area(radius, precision=3 ){
    return (Math.PI * radius * radius).toFixed(precision);
}
console.group('area of circle by passing default valur =>', area(4, 0));
console.group('area of circle by passing default valur =>', area(4, 5));
console.group('area of circle by passing default valur =>', area(4, undefined));


function fun1(){
    return 1;
}
console.log(fun1());

function fun2(){
    return;
}console.log(fun2());

function fun3(){
    return 1+3+6+7+7
    9+3+6+9; //this reutn will not work only above line will ececute 
}
console.log(fun3());

function fun3(){
    return (1+3+6+7+7
    +"hello"); //this reutn will work
}
console.log(fun3());