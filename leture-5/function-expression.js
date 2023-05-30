//function declaration
function sayhi(){
    console.log('Hi');
}
sayhi();

//function expression
const greet = function(){ //creating function without name of it, is called anonymous function and assigin that function to a variable 
    console.log("good morning");
};
greet(); //now the variable is a function and calling that variable function\



func1() //can call a function before declaring it
function func1(){
    console.log('func1');
}

//func2(); //srror, connot acess func2 before initialization
let func2 = function(){
    console.log('func2');
};

/* let age = prompt("enter your age");

if (age < 18){
    //function declared with declaractions cannot be accessed outside of the blog
    function welcome(){
        console.log('age is minner');
    }
}else{
    function welcome(){
        console.log("age major");
    }
}

welcome(); */

let welcome;
let age = prompt("enter your age");

if (age < 18){

    welcome =function(){
        console.log('age is minner');
    }
}else{
    welcome =function(){
        console.log("age major");
    }
}

welcome();