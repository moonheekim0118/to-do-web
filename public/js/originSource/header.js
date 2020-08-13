const headerBar = document.querySelector('header');
const sticky = headerBar.offsetTop;

window.addEventListener("scroll",editHeader);

function editHeader(){
    console.log(sticky);
    if(window.pageYOffset > sticky){
        headerBar.classList.add("sticky");
    }else{
        headerBar.classList.remove("sticky");
    }
}