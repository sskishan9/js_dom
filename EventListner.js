const button=document.getElementById('btn');
const Text=document.querySelectorAll('txt');
console.log(button);
console.log(Text);

button.addEventListener('click',function(){
    console.log('Button is Clicked');
    if(Text.classList.contains('hide')){
        Text.classList.remove('hide')
    }
    else{
        Text.classList.add('hide')
    }
})