const header = document.querySelector('header');
const sticky = header.offsetTop;

window.addEventListener("scroll",editHeader);

function editHeader(){
    console.log(sticky);
    if(window.pageYOffset > sticky){
        header.classList.add("sticky");
    }else{
        header.classList.remove("sticky");
    }
}