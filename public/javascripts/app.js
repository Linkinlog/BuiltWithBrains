const navbar = document.getElementById('navbar');
const navButton = document.querySelector("#navbar > div > button")
console.log(navbar)
window.onscroll = function (){
    if (window.pageYOffset >= 75){
        navbar.classList.add("bg-main");
    }
    else {
        navbar.classList.remove("bg-main");
    }
};

navButton.addEventListener('click', () => {
    navbar.classList.toggle('bg-main')
})