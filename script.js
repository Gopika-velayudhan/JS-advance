// main.js
// import { addAll, findMax,LibraryName as lname} from "./lib.js";

// const val = addAll([1, 2, 3]);
// const max = findMax([20, 30, 40, 50, 100]);
// console.log(lname);

// console.log(max);
// console.log(val);
// default export

// import mySillyName from './lib.js';
// const max=mySillyName([20,30,40,50,100]);
// console.log(max)


import * as libob from './lib.js';

const a= libob.findMax([20,30,40,50]);
console.log(a)



