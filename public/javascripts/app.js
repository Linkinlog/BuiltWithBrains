const navbar = document.getElementById('navbar');
console.log(navbar)
window.onscroll = function (){
    if (window.pageYOffset >= 75){
        navbar.classList.add("bg-main");
    }
    else {
        navbar.classList.remove("bg-main");
    }
};