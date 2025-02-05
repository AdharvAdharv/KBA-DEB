
const lodash1=require('lodash')
// importing addtion file
const add1=require('./Addition.js') 

console.log("Hello world");
let a="Node JS"
console.log('Hi',`${a}`);
 let b='node'
if(a!=b){
     console.log("a is not equal to b")
}

for(i=5;i<=30;i=i+5){
    console.log(i)
}

let array=[2,4,6,7,8]
console.log(lodash1.reverse(array))

// capitalize tha first letter of a sentence
console.log (lodash1.capitalize('hello world'));

// printing add function
console.log(add1.add(3,5));