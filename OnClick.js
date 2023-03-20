const button=document.getElementById('btn');
const d=document.getElementById('date');
const b=document.getElementById('bcg');
const back=document.getElementById('background');
button.addEventListener('click',function(){
    console.log('button is clicked');
    d.textContent=Date();

})
b.addEventListener('click',function(){
    back.style.backgroundColor='green';
})