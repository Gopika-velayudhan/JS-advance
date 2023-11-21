export function creatButton(name,fn) {
    const btn=document.createElement('button');
    btn.innerText=name;
    btn.onclick=fn;
    btn.style.margin='10px';
    btn.style.color='black';
    document.body.appendChild(btn);
    
}