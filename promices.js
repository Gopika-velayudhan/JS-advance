function getDataFromApi(num) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(num);

    
        },1000);
        
    })
}
 function getDataFromApi(num) {
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            resolve(num);
    
        },1000);

    })
    
    
 }

getDataFromApi(5)
.then((success)=>{
    return getDataFromApi(success+5)
    



})

 .then((success)=>{
     console.log(success);
 });

