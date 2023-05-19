const condition = 5 < 6;

if (condition) {
    // if condition is true, then this block will be executed
    console.log('5 is thess than 6');
}

if (10 < 6) {
    console.log('10 is grater then 6');
}
else{
    console.log('10 is not grater');
}

/* let n = prompt("enter number to check");
if (n>10){
    console.log('entered number is grater');
} else{
    console.log('enter number is less than 10');
} */

//checking timimg
/* const time = prompt('enter a time');
if(time < 12) {
    console.log('good morning');
}else if(time >=12 && time<=16){
    console.log('good afternoon');
}else if(time > 16 && time <=22){
    console.log('Good evening');
}else if (time >22 && time <=24)
{
    console.log('Good night');
}
else{
    console.log('invalid timing');
} */

// we can write if condition in single as well but it won't work in all conditions
if(true) console.log('value is true');
console.log('outide if');

 let time=16
/*let greet = '';
if (time > 12){
    greet = 'good evening';
}else{
    greet = 'good morning';
}
console.log(greet); */

// ternary operator ==> ? :   [this ternary operator we can't use all the time if it's single contion then we can use in single line]
let greet = time > 12 ? 'good evening' : 'good morning';
console.log(greet);


//switch statment 
const num =0;
switch (num) {
    case 1:
        console.log('jan');
        break;
    case 2:
        console.log('Feb');
        break;
    case 3:
        console.log('mar');
        break;
    case 4:
        console.log('apr');
        break;
    case 5:
        console.log('may');
        break;
    case 6:
        console.log('jun');
        break;
    default:
        console.log('enter vaild number')

}