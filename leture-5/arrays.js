/* araays:- arrays is used to store collection of values which can be any datatype */

const arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr[2]);
arr[3]=20;
console.log(arr);

const arr1=[1, 'hello', true, [2,3], {key:'vaue'}]
console.log(arr1);

//arr = [20,30] /* this is not allowed,bcz  we are changing the reference of arr */

console.log('array length',arr1.length);
console.log('array tostring',arr1.toString());
console.log('array join',arr1.join('+')); //by default array will convert to string by saprating by comma. if we want saprate with any symbals like : or + or .

console.log('push method', arr.push(8)); //adding new elemts to the existing arry at the end of list.
console.log(arr);

arr.pop(); //pop is used to remove element at the end of array
console.log(arr)

arr.shift(); //shift method will remove first element from the array
console.log(arr);

arr.unshift(9); //unshift  method wil add elememt from the start or beggining of a array list
console.log(arr);

const fruits = ['aaple', 'banana', 'orange', 'mango'];
console.log(fruits);
fruits.splice(2,1,'chikoo'); //add chikko at index 2, not removing anything so 0
console.log(fruits);
fruits.splice(3,1) //remove one element fron index 3 
console.log(fruits);

console.log('slice method', fruits.slice(2,3)); //slice won't modify the array, it just display some part of the array element

//merge arrays
const a = [1,2,3];
const b = [4,5];
const c = [6,7];
const newarr = a.concat(b, c);
console.log(newarr);

const multiDarr = [
    [1,2],
    [3,4],
    [5,6]
];
console.log(multiDarr.flat()); //flat methos convert multidimantion arry to single dimantion arry

