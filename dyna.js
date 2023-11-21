import { creatButton } from "./widget.js";

creatButton('Feature 1', ()=>{
    alert('feature 1')
});
creatButton('Feature 2', async()=>{
    
    const obj= await import('./feature2.js');
    creatButton('start disco',obj.changeBg);
    creatButton('stop disco',obj.stopChangingBg);

    
    
});
// let isGreen = true;
// let handle = null;
// function changeBg() {
//     if(!handle){
//         handle =   setInterval(()=>{
//             document.body.style.background = isGreen ? 'green':'blue';
//             isGreen=!isGreen;
    
//         }, 500);
        
//     }

//  }
 

// function stopChangingBg(){
//     if(handle){
//         clearInterval(handle);
//         handle=null;
//         document.body.style.background='none';
//     }
// }