let value = true;
console.log(typeof value);
console.log(value)

value = String(value); // convert using string function
console.log(typeof value);
console.log(value);

value = ' ' + true; // convert using concatenation 
console.log(typeof value);

console.log(1,typeof 1);
console.log(1, typeof String(1));

console.log(null, typeof null);
console.log(null, typeof String(null));

console.log(undefined, typeof  undefined);
console.log(undefined, typeof String(undefined));

// Numeric Conversion 
console.log("6" * "2"); //in string, it will automatocally get conveted to number, except for 
console.log("6" * "2");
console.log("abc" / "2"); // NaN, any mathematical operation with string not having number will
console.log("30", typeof Number ("30"));
console.log("a", typeof Number("a"));
console.log(+10, typeof +"10");

console.log(true, Number(true))  // o/p 1
console.log(false, Number(false)) // o/p 0

console.log(null, Number(null));  //o/p 0
console.log(undefined, Number(undefined)); //o/p NaaN

//Boolean conversion
console.log("=========Boolean conversion=========");
console.log(1, Boolean(1)); //true
console.log(0, Boolean(0)); //false
console.log("hello", Boolean("hello")); //true
console.log("", Boolean("")); //false
console.log(null, Boolean(null)); //false
console.log(undefined, Boolean(undefined)); //false
console.log(NaN, Boolean(NaN)); //false
console.log(" ", Boolean(" ")); //True, because space is non-empty value so result will be true

//Rule: any intuitively empty value, like 0, empty string (''), null, undefined, Nan will become false