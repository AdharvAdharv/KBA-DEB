//  this is first method to import lodash
// const b=require('lodash');

// this is second method to import lodash  :
// if import lodash want to work, change the  "type": "module",  in package.json file
  import b from 'lodash';

console.log("Welcome to My project");
let array=[9,8,7,6,5]
console.log(b.reverse(array));
