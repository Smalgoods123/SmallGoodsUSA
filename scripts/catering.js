const hamburger = document.querySelector(".hamburger");
/*const navImg = document.querySelector(".navImg");*/
const navHome = document.querySelector(".navHome");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    /*navImg.classList.toggle("active");*/
    navHome.classList.toggle("active");
}

const catterL = document.getElementById('caterVectorL');
const catterR = document.getElementById('caterVectorR');
const sliding = document.querySelector(".sliding");
const cater1 = document.querySelector(".cater1");
const cater3 = document.querySelector(".cater3");
const sidecrop1 = document.querySelector(".side-crop1");

catterR.addEventListener("click", catterTurnR);
catterL.addEventListener("click", catterTurnR);

function catterTurnR() {
    sliding.classList.toggle("active");
    cater1.classList.toggle("active");
    cater3.classList.toggle("active");
    sidecrop1.classList.toggle("active");
}

const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

var sectionIndex = 0;

rightArrow.addEventListener('click', function() {
    sectionIndex = (sectionIndex < 2) ? sectionIndex + 1: 0
    slider.style.transform = 'translate('+ (sectionIndex) * -33.33 +'%)';
});

leftArrow.addEventListener('click', function() {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1: 2
    slider.style.transform = 'translate('+ (sectionIndex) * -33.33 +'%)';
});