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
const closeModal = document.querySelectorAll(".close");
const closeBtn = document.querySelector(".end");
const submit = document.querySelector(".btn-submit");
const modalThanks = document.querySelector(".thanks");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal when you click on span close
closeModal.forEach((btnClose) =>
  btnClose.addEventListener("click", closeWindow)
);

// close modal when you click on button close
closeBtn.addEventListener("click", closeWindow);

//Close modal
function closeWindow() {
  modalbg.style.display = "none";
  modalThanks.style.display = "none";
}

// When registration form is submited
submit.addEventListener("click", registration);

//Modal thanks for registration open
function registration() {
  modalThanks.style.display = "block";
  modalbg.style.display = "none";
}

//Validation form: when click on submit button, the form is validate if no data error on input
const inputFirst = document.getElementById("first");
const inputLast = document.getElementById("last");
const inputEmail = document.getElementById("email");
const inputBirthdate = document.getElementById("birthdate");
const inputQuantity = document.getElementById("quantity");

//regex to check texte is only alphabet
function isOnlyAlphabet(texte) {
  return /^[a-zA-Z]*$/.test(texte);
}

function validate() {
  const data = new FormData(document.querySelector("form"));

  //verify if firstname has min 2 characters and no numeric value
  if (inputFirst.value.length < 2 && !isOnlyAlphabet(inputFirst.value)) {
    formData[0].setAttribute("data-error-visible", "true");
    return false;
  } else {
    formData[0].setAttribute("data-error-visible", "false");
  }
  //verify if lastname has min 2 characters and no numeric value
  if (inputLast.value.length < 2 && !isOnlyAlphabet(inputLast.value)) {
    formData[1].setAttribute("data-error-visible", "true");
    return false;
  } else {
    formData[1].setAttribute("data-error-visible", "false");
  }

  //verify if email field is not empty
  if (inputEmail.value === "") {
    formData[2].setAttribute("data-error-visible", "true");
    return false;
  } else {
    formData[2].setAttribute("data-error-visible", "false");
  }

  //verify if quantity field is not empty
  if (inputQuantity.value === "") {
    formData[4].setAttribute("data-error-visible", "true");
    return false;
  } else {
    formData[4].setAttribute("data-error-visible", "false");
  }

  //verify if all attributes name=location of checkboxes was checked
  if (!data.has("location")) {
    formData[5].setAttribute("data-error-visible", "true");
    return false;
  } else {
    formData[5].setAttribute("data-error-visible", "false");
  }

  //verify if attribute name=checkbox1 was checked
  if (!data.has("checkbox1")) {
    formData[6].setAttribute("data-error-visible", "true");
    return false;
  } else {
    formData[6].setAttribute("data-error-visible", "false");
  }

  //regex verify if this is an email
  /* function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }*/
  registration();
}
