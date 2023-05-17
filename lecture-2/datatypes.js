//dynamic type language
let message = "hello world";
message = 10;

//number
let n = 10; //integer
n = 12.235; //floating/double
n = Infinity; //we can print infinity value 
console.log(n);
console.log(1 /0);
console.log(-1 /0);

n = NaN; // NaN is Not a number. even this we can print in consol 
console.log(n);

console.log("some string"/2); // which can't divide or can't give output then it ll print NaN. now in this console string can't divide number so it'll print NaN.

console.log('1'+1+2); //112 output
console.log(1+1+'2'); //22 output

//conving string to number
let x = 10;
console.log(+ x + 20);
console.log(typeof(x));
console.log(NaN +1) // output nan

y=0.1+0.2
console.log(y)
console.log(typeof(y));

// Range of numbers is -(2^53 - 1) to (2^53 -1)
// Bigint

let z = 10n; // declaring bigint using n alphabatic
console.log(typeof z);


//string declaration
let str1 = 'hello'; // can't write muiltpule line of strings
let str2 = "hello"; // can't write muiltpule line of strings to over come this problem we use template string
console.log(str1);
console.log(str2);

const str3 = `hello 
world ${str1}
my place ${4+5}
${Math.random()}` // here we can write muilte lines of code and one more advantage we can write declareedd varables using ${str1}
console.log(str3);