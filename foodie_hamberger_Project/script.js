const menu=document.querySelector('.hamburger-menu-container');

const header=document.querySelector('.header-content');

const close=document.querySelector('.close-icon');
menu.addEventListener('click',function(){
    header.classList.add('menu-open');
})

close.addEventListener('click',function(){
    header.classList.remove('menu-open');
})