const img = document.getElementById('menuChange');
const btnR = document.getElementById('vectorR');
const btnL = document.getElementById('vectorL');

btnR.addEventListener('click', ()=>{
    img.src = '../static/images/menuCheeseP2.png'
})

btnL.addEventListener('click', ()=>{
    img.src = '../static/images/menuCheeseP.png'
})

const hamburger = document.querySelector(".hamburger");
/*const navImg = document.querySelector(".navImg");*/
const navHome = document.querySelector(".navHome");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    /*navImg.classList.toggle("active");*/
    navHome.classList.toggle("active");
}