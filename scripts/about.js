// GLOBAL VARIABLES
const cheesemailContent = document.querySelector(".cheesemail-content");
const cheesemailForm = document.querySelector("#cheesemail-form");
const cheesemailThanks = document.querySelector("#cheesemail-thanks");
const form = document.getElementById("newsletter");

window.addEventListener("load", function() {
  form.addEventListener("submit", function(e) {
    // Prevents window from reloading
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      // hides subscribe after subbing
      cheesemailForm.classList.add("hidden");
      // Keeps cheesemail background same height
      cheesemailContent.style.padding = '17vh 0';
      cheesemailThanks.classList.remove("hidden");
    })
  });
});

const hamburger = document.querySelector(".hamburger");
/*const navImg = document.querySelector(".navImg");*/
const navHome = document.querySelector(".navHome");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    /*navImg.classList.toggle("active");*/
    navHome.classList.toggle("active");
}