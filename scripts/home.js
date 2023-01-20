const hamburger = document.querySelector(".hamburger");
const navImg = document.querySelector(".navImg");
const navHome = document.querySelector(".navHome");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navImg.classList.toggle("active");
    navHome.classList.toggle("active");
}