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

//Modal thanks for registration open
function registration() {
  input.reset();
  modalThanks.style.display = "block";
  modalbg.style.display = "none";
}

let input = document.querySelector("form");

//verify if name has min 2 characters and no numeric value
function validName(text) {
  return /^[a-zA-Zéèàê' -]{2,}$/.test(text);
}

//********Check firstname field******
input.first.addEventListener("input", function () {
  validName(this);

  if (!validName(input.first.value)) {
    formData[0].setAttribute("data-error-visible", "true");
    return false;
  } else {
    formData[0].setAttribute("data-error-visible", "false");
    return true;
  }
});

//********Check lastname field******
input.last.addEventListener("input", function () {
  validName(this);

  if (!validName(input.last.value)) {
    formData[1].setAttribute("data-error-visible", "true");
    return false;
  } else {
    formData[1].setAttribute("data-error-visible", "false");
    return true;
  }
});

//********Check email field******
input.email.addEventListener("input", function () {
  validEmail(this);

  //verify if email field is not empty
  if (input.email.value === "") {
    formData[2].setAttribute("data-error", "le champs est vide");
    formData[2].setAttribute("data-error-visible", "true");
    return false;
    //verify if email is valid
  } else if (!validEmail(input.email.value)) {
    formData[2].setAttribute("data-error-visible", "true");
    return false;
  } else {
    formData[2].setAttribute("data-error-visible", "false");
    return true;
  }
});

//regex verify if this is an email
function validEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

//********Check birthdate field******
input.birthdate.addEventListener("change", function () {
  validBirthdate(this);

  //verify if birthdate is passed
  if (!validBirthdate(input.birthdate.value)) {
    formData[3].setAttribute("data-error-visible", "true");
    return false;
  } else {
    formData[3].setAttribute("data-error-visible", "false");
    return true;
  }
});

function validBirthdate(birthdate) {
  const date = new Date(input.birthdate.value);
  if (date.getTime() < Date.now()) {
    return true;
  } else {
    return false;
  }
}

//********Function when click on button "c'est parti!"******
function validate() {
  if (
    validName(input.first.value) &&
    validName(input.last.value) &&
    validEmail(input.email.value) &&
    validBirthdate(input.birthdate.value) &&
    //check if one location value was checked
    input.location.value &&
    //check if term and condition was checked
    input.checkbox1.checked
  ) {
    //Registration is valid, function registration reset form, close form modal and thanks modal open
    registration();
  } else {
    formData[6].setAttribute(
      "data-error",
      "Veuillez renseigner tous les champs et accepter les conditions d'utilisation."
    );
    formData[6].setAttribute("data-error-visible", "true");
  }
}
