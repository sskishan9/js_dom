//Get Element By Id

const title=document.getElementById('main-heading');
console.log(title);
console.log(title.textContent);

//Get Element By ClassName
const listItems=document.getElementsByClassName('list-items');
console.log(listItems);
console.log(listItems.textContent);

//Get Element By TagName 
const list=document.getElementsByName('ul');
console.log(list);

//Styling an Element 
title.style.color="red";

for(i=0;i<listItems.length;i++)
{
    listItems[i].style.fontSize='30px';
}

const btn=document.getElementById('id');
function click(){
    console.log('Button is Clicked');
}

btn.addEventListener('click',click);
