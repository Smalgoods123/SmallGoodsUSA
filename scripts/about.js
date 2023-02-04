// GLOBAL VARIABLES
const signUpBtn = document.getElementById("signUpBtn");
const cheesemailContent = document.querySelector(".cheesemail-content");
const cheesemailForm = document.querySelector("#cheesemail-form");
const cheesemailThanks = document.querySelector("#cheesemail-thanks");

// Hides subscribe after subbing
signUpBtn.addEventListener('click', () => {
  cheesemailForm.classList.add("hidden");
  cheesemailThanks.classList.remove("hidden");
  }
);