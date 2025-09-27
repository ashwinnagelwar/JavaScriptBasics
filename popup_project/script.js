const popup=document.querySelector('.popup');
const button=document.querySelector('.button');
const closePopup=document.querySelector('.close-icon');


button.addEventListener('click',()=>{
    popup.classList.add('open');
})

closePopup.addEventListener('click',()=>{
    popup.classList.remove('open');
})