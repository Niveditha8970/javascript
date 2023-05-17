/* console.log(a); // undefined is the output. that will display bcz of hoisting
var a = 10; */

//all variables will be hoisted at the top of the file and they are declared with 
var a;
console.log(a);
var a= 10;

//let b; // hoisted-> variable b is  in temporal dedezone ( memory is not allocated)
//console.log(b); //b still in temporal dedzone
let b= 10; // b is temporal is completed
console.log(b); //b is not in deadzone(memory is allcated to b varaiable)



//converting for writing variables names
const userName = 'nivi'; // use camel-case
const _userName = 'nivi'; // underscore is allowed
const $userName = 'nivi'; //$ is allowed