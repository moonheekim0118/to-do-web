const nav_bar= document.querySelector('nav');
const close_btn =document.getElementById('close__btn');
const nav_btn = document.getElementById('nav__toggle');

nav_btn.addEventListener('click', ()=>{
    nav_bar.classList.add('show-nav');
})

close_btn.addEventListener('click', ()=>{
    nav_bar.classList.remove('show-nav');
})

window.addEventListener('click', (e)=>{
    console.log(e.target);
    if(e.target.className ==='show-nav'){
        nav_bar.classList.remove('show-nav');
    } 
})