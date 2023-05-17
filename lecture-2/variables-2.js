//Always create variables using const keyword first
//if you think, the value of the variable us going to change, then use let keyword

const a = 10; // variables declared with const are constant

// a =20; error-> assignment to constant variable
/* 
;
;
;
long code
*/


console.log(a);

let b = 20;
console.log(b);
 b = 30;
 console.log(b)

 var c =10; // declaration
 c=20      //updation
 console.log(c);
 var c =30;  //re-declaration is possiable only in var keword
 console.log(c)


 let d =10; //declaration
 d = 10;  //updation
 // let d= 30; // re-declared cannot be possiable


 const e=10;
 e=20;// error:- updation and re-declaration is not possiable.