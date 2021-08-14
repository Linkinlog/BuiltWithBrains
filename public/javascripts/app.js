const navbar = document.getElementById('navbar');
const navButton = document.querySelector("#navBtn");
window.onscroll = function (){
    if (window.pageYOffset >= 75){
        navbar.classList.add("bg-main");
    }
    else {
        navbar.classList.remove("bg-main");

    }
};

navButton.addEventListener('click', () => {
    !navbar.classList.contains('bg-main') ? navbar.classList.add('bg-main') : navbar.classList.remove('bg-main')
})