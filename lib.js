// export const name = 'My Array Library';
// export const options = {
//     version: 1.1,
//     author: 'Gopika'
// };

// export function addAll(arr = []) {
//     log('addAll');
//     return arr.reduce((total, item) => total + item, 0);
// }

// export function findMax(arr = []) {
//     log('findMax');
//     return Math.max(...arr);
// }

// export function log(val) {
//     console.log('inside', val);
// }

//  const name = 'My Array Library';
//  const options = {
//     version: 1.1,
//     author: 'Gopika'
// };

//  function addAll(arr = []) {
//     log('addAll');
//     return arr.reduce((total, item) => total + item, 0);
// }

//  function findMax(arr = []) {
//     log('findMax');
//     return Math.max(...arr);
// }

//  function log(val) {
//     console.log('inside', val);
// }
// export{
//     name as LibraryName,
//     options,
//     addAll,
//     findMax
// };

// import { test1 } from "./lib2.js";
const name = 'My Array Library';
  const options = {
    version: 1.1,
    author: 'Gopika'
 };

  function addAll(arr = []) {
     log('addAll');
     return arr.reduce((total, item) => total + item, 0);
 }

   function findMax(arr = []) {
     log('findMax');
    return Math.max(...arr);
 }

  function log(val) {
     console.log('inside', val);
}
export default findMax;

export{
    name,
    options,
    addAll,
    findMax,
    
};
export {test1} from './lib2.js';
 