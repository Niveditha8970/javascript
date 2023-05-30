const arr = [1,2,3,4,5];

for(let i=0; i<arr.length;i++){
    console.log(arr[i]);
}

//for-of
for (let val of arr){
    console.log('val',val);
}

//forEach()
arr.forEach(function(value){ //in foreach method work as callback function, in foreach as three paramater (value,index,array).
    console.log('value',value);
});

//using arror function we can write forEach() to reduce line of code
arr.forEach((value) => console.log('value', value));


const nums = [1,2,3,4,5];
/* const evenArry = [];
for(let i=0; i<nums.length; i++){
    if (nums[i]%2 === 0){
        evenArry.push(nums[i]);
    }
}
console.log('everArry', evenArry) */

//to reduce the length of above code, which means we can write same program in single line using filter function

/* const evenArr= nums.filter(function(value){
    if (value%2===0){
        return true;
    }else{
        return false;
    }
});
console.log(evenArr) */

//the same above program if function return in single line in below program
/* const evenArr= nums.filter(function(value){
    return value%2===0;
});
console.log(evenArr) */

//again same program return in single program by using arrow and filter function
const evenArr = nums.filter(value => value% 2 === 0);
console.log(evenArr);

const products = [
    {
        id: 1,
        name: 'iphone',
        price: 50000
    },
    {
        id: 2,
        name: 'Pixel',
        price: 25000
    },
    {
        id: 3,
        name: 'Samsung',
        price: 45000
    },
];
console.log(products);

//all products with price >40000

const prod = products.filter(value => value.price> 40000);
console.log(prod);

/* Map function */
const result = nums.map(value => { //map replace the actulay value ex:- in nums array it replace into 10 but nums values remain same if we print that
    return 10;
});
console.log(result);
console.log(nums);

/* find function */
const product = products.find( p => p.id === 2); 
console.log(product);

/* find() can return only one value as result, in find if one value matchs with condition it won't check anything
but filter() return muiltpule value as result, it can check duplicate value as well
in find() if condition not match or not found then return undefined
filter() if condition not match then return empty array
find() return entry object of that condition matches
filter() return the actual value of that condition not the entery object */
