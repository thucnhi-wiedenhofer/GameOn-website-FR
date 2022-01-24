function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModal = document.querySelector(".close");
//const submit = document.querySelector(".btn-submit");
//const modalThanks = document.getElementById("#thanks");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
closeModal.addEventListener("click", closeForm);

//Close modal form
function closeForm() {
  modalbg.style.display = "none";
}

// submit registration form
//submit.addEventListener("click", registration);

//Modal thanks for registration open
//function registration() {
//  modalThanks.style.display = "block";
//  modalbg.style.display = "none";
//}

//regex verify if this is an email
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

//regex verify if only alphabet
function isOnlyAlphabet(texte) {
  return /^[a-zA-Z]*$/.test(texte);
}
