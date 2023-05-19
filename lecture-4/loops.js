let i = 1;
while(i<=10) {
    console.log(i * 2);
    i++;
}

let j =1;
do{
    console.log('j=>',j * 2);
    j++;
}while(j<=10);


for( k=1; k<=10; k++){
    console.log('k=>', k * 2);
}

//using two vaiables and two statement in single for loop
for (let i =1, j=5; i< 5; i++){
    console.log('i', i);
    console.log('j',j * i);
}

//this is also one more way to perform for loop
let a =1;
for(; a<5; a++){
    console.log('a',a);
}

//this is and work in for loop
let b =1;
for(; b<5;){
    console.log('b',b);
    b++
}

//infinite loop
/* for(;;){
} */


//infinite loop using while
/* while(true){

} */

let sum=0;
while(true) {
    const val = prompt('enter some number');

    if(!val) break; //if we not enter any value then this condition ll break then add the elements or values which we have entered

    sum += +val; //sum=sum+val;
}
console.log(sum);