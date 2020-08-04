const open =document.getElementById('login');
const close=document.getElementById('close');
const modal_container=document.getElementById('modal-container');


open.addEventListener('click',()=>{
    if(document.body.classList.contains('show-nav')){
        document.body.classList.remove('show-nav');
    }
    modal_container.classList.add('show-modal');
})

close.addEventListener('click',()=>{
    modal_container.classList.remove('show-modal');
})