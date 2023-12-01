// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then ((res) => res.json())
// .then((msg)=>{
//     console.log( msg.title )
//      console.log( msg.id);
// })

(fetch("https://jsonplaceholder.typicode.com/todos/1"))
    .then((res)=>res.json())
    .then((msg)=>{
     console.log(msg)
 })