//Boolean
const a = true;
const b = false;
console.log(a);
console.log(b);

// object
const obj = {
    key1: 'Val1',
    name: 'Pranit',
    x: 10,
    y: true,
    val1: {
        a: 20,
        b:30
    },
    0: 50, // here 0 is a key and 50 is a value
    true: 70
};
console.log(obj);
console.log(obj.key1);
console.log(obj.name);
console.log(obj['x']);
console.log(obj.val1.a);
console.log(obj['0']);
console.log(obj.true);

console.log(typeof key1);

//null
const x = null; // typeof null willbe object, bcz null treated as objects in javascripts
console.log(x);

//undefined
let y;
console.log(y);

console.log(typeof y) // typeof undefined variable will be undefined only.



