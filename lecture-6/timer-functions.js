/* timer functions are Asyncrose function, it will work saprate thred */
/* setTimeout() */

/* setTimeout(() =>{
    console.log('After 2 seconds');
}, 2000);  */

/* function fun1(){
    console.log('fun1');
}
fun1(); */
//console.log('done'); // now done will print first then after 2second the After 2 seconds will print bcz it is in different thred.

console.time('timer1'); // to check time of execution, start time
setTimeout(() =>{
    console.log('After 2 seconds');
}, 500);
//blocking code means condition, do not ever write such blocking codes in main thred
for (let i=0; i < 1e9; i++){} // this is blocking code it'll hold all other operation to execute.
console.log('done!');
console.timeEnd('timer1'); // check end time of execute.