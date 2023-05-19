// <, >, <=, >=, ==, !, !=
// the output will always be boolean value

console.log(2 > 1);
console.log(2 < 1);
console.log(2 != 1);
console.log(2 == 1);
console.log(2 >= 1);
console.log(2 <= 1);

//comperarison between string
console.log('Z' > 'A'); // true. true bcz assci value of Z=91 is grater then A=65
console.log('A' > 'a') ; // false // a= 92 and A =65
console.log('Glow > Glee', 'Glow' > 'Glee'); //true


console.log('2' > 1) //true, string 2 is convered into number 2
console.log('01' == 1); //true, '01' string converted into number 01 means 1 hence 1==1

console.log('true == 1', true == 1); //true, boolean true get conveted into number 1
console.log('false == 0', false == 0); // true
console.log('' == false) // true, empty means 0 so eqale to false

// strict eqality (===)

console.log('false === 0', false === 0); // flase
console.log(5 === 8);

//always use strict equality (===) operator for comparison insted of ==

console.log('null == undefined', null == undefined); //true
console.log('null === undefined', null === undefined); //false