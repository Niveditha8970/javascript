//unary +,-
const a = 10;
console.log(a, -a);
const b = -20;
console.log(b, -b);

//math operations
console.log(3 + 2);
console.log(3 - 2);
console.log(3 * 2);
console.log(3 / 2);
console.log(5 % 2);
console.log(3 ** 2);
console.log(3 ** (1/2)); // finding sqare root

//operator precedence - BODMAS rules follow
const val1= 3*4+2*6/2;
console.log(val1);

const val2= 3*(4+2) *6/2;
console.log(val2);

//Assignment operator
let x =1;
let y =2;

let z = 3 - (x = y + 1);
console.log('x', x);
console.log('y', y);
console.log('z', z);

// Short hand operators
let p = 10;
p+=20; //p = p + 20
console.log('p',p);

//Increment/Decrement (++ / --)
let a1= 10;
a1++ // a1= a1+ // post increment
console.log('a1', a1);
a1-- // a1= a-1 // post decrement
console.log('a1',a1);

let a3=20
++a3 // a1= a1+1 // pre increment
console.log('a3', a3);
--a3 // a1= a-1 // pre decrement
console.log('a3',a3);

console.log('a3++', a3++); //20
console.log('a3--', a3--); //21
console.log('--a3', --a3); //19
console.log('++a3', ++a3); //20