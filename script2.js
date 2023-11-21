
      import { addArray } from "./script1.js"; 
      import { addArray as concatArray } from "./script2A.js"; 

       const values=addArray([3,4,5]);
       const value=concatArray([3,4,5],[1,2,,3,4]);
       
        console.log(value);
        console.log(values);