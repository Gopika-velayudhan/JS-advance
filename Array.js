 const str = "abcd";
 const arr = [0,3,1,2];
 let str1 = "";
 for(let i =0; i<str.length; i++){
     for(let j = 0; j<arr.length; j++){
         if(i==arr[j]){
            str1 = str1 + str[j];
        
         }
     }
 }

 console.log(str1);




