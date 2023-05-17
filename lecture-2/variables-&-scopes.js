//console.log('variables');

/* let a = 10;
var b = 20;
const c = 30;

console.log( a,b,c); */

//There are three scop of variables
//1. global scop
var a = 10;

console.log(a);

//2. block scop:- what ever we declare inside flower braces

{
     //block scope
     var b = 20;
     var c = 30;
     console.log('b', b)
}
//console.log('c', c) //error here -> c is not defined

if (true){
    //block scop
}

for (var i=0; i < 5; i++) {
    //block scrop
    
}
console.log(i)

//3. function scop
 function fun1 (){
    //function scope or local scope :- the variable declard within the function can access only inside function with var/let/const keyword
    var result = 10+20;
    console.log(result);
 }
 fun1()
 //console.log(result); //rror will display, result is not defined