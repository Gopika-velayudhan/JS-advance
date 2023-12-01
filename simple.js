// function  delay(ms) {
//     return new Promise(resolve =>setTimeout(resolve,ms))
    
// }
// async function name(){
//     console.log('start');
//     await delay(2000)
//     console.log("after 2 sec");
// }
// name()
// console.log("hello")

// function Example() {
//     return new Promise((resolve,reject)=>{
//         let success=false;

//         if(success){
//             console.log("the operation is correrct")
//         }
//         else{
//             console.log("this is error")
//         }
//     });
// }

//     Example()
//     .then((result)=>{
//         console.log(result)
//     })
//     .catch((error)=>{
//         console.log(error)

//     });
    
    
function Example() {
    return new Promise((resolve,reject)=>{
        let success =true;
        if(success){
            console.log("correct")
        }else{
            console.log("not correct")
        }
    });
    
}
Example()
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
});