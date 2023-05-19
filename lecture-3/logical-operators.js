// ||, &&, !
console.log(true || true); //true
console.log(true || fasle); //true
console.log(false || true); //true
console.log(false || false); //false


console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

//OR operator return first truthy value
console.log(1 || 0); //1
let a = 10;
console.log(1 || (a=20)); // 1, since 1st value is truthy, next expression isnot even evaluated
console.log(0|| (a=20)); // 20, since 1st value is 0 so false hence it checked next step then it assesed a=20  answer became 20
console.log('a', a);

console.log('h' || 10);//h, since  string 'h' is truthy value
console.log('' || 10); //10, since empty string '' is falsy value, so the output is 10

console.log('null || 10', null || 10) // 10, null will be faslsy value
console.log('null || undefined || 10', null || undefined || 10) // 10, null and undefeined will be faslsy value
console.log('null || 0 || ndefined', null || 0 || undefined) // 0, all will be faslsy value hence return lasty 

/* let username = prompt('enter your name');
if (username === null || username === ''){
    username= 'Anonymous';
}
console.log(username); */

/* let username = prompt('enter your name');
console.log(username || 'Anonymous'); */

let height = 0;
console.log(height || 10);

//null coalesene (??) - it will only return next value if the previous value is null/undefined
let h=0;
console.log(h ?? 10); // 0
console.log('null ?? 0', null ?? 10); // 10
console.log(undefined ?? 10); // 10

//And operator
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false


//AND operator returns first falsy value
console.log('1 && 0 ===>', 1 && 0 );
console.log('1 && 3 ===>', 1 && 3 );
console.log('null && 5 ===>', null && 5 );
console.log('1 && 3 && null && 6 ===>', 1 && 3 && null && 6 );
console.log('null && undefined ===>', null && undefined );
console.log('undefined && null ===>', undefined && null);

//(NOT) !
console.log(!true); //false
console.log(!false); //true
console.log(!0); //true
console.log(!''); //true
console.log(!!null); // false

