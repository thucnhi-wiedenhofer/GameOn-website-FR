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
const body = document.querySelector("body");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  body.style.overflow = "hidden"; // prevent scroll bar body
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

//when registration is valid, function reset form, close form modal and thanks modal open
function registration() {
  input.reset();
  modalThanks.style.display = "block";
  body.style.overflow = "hidden"; // prevent scroll bar body
  modalbg.style.display = "none";
}

//********Validation form for registration******

let input = document.querySelector("form");

//verify if name has min 2 characters and no numeric value
function validName(text, index) {
  if (text.length < 2 || !/^[a-zA-Zéèàê][a-zA-Zéèàê' -]+$/.test(text)) {
    formData[index].setAttribute("data-error-visible", "true");
  } else {
    formData[index].setAttribute("data-error-visible", "false");
  }
}

//regex verify if this is an email
function validEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

// verify if birthdate is passed
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
  let data = new FormData(document.querySelector("form"));

  //********Check firstname field******
  validName(input.first.value, 0);

  //********Check lastname field******
  validName(input.last.value, 1);

  //********Check email field******
  if (input.email.value === "" || !validEmail(input.email.value)) {
    formData[2].setAttribute("data-error-visible", "true");
  } else {
    formData[2].setAttribute("data-error-visible", "false");
  }

  //********Check birthdate field******
  if (input.birthdate.value === "" || !validBirthdate(input.birthdate.value)) {
    formData[3].setAttribute("data-error-visible", "true");
  } else {
    formData[3].setAttribute("data-error-visible", "false");
  }

  //********Check quantity field******
  if (input.quantity.value === "") {
    formData[4].setAttribute("data-error-visible", "true");
  } else {
    formData[4].setAttribute("data-error-visible", "false");
  }

  //verify if one of attributes name=location of checkboxes was checked
  if (!data.has("location")) {
    formData[5].setAttribute("data-error-visible", "true");
  } else {
    formData[5].setAttribute("data-error-visible", "false");
  }

  //verify if attribute name=checkbox1 was checked
  if (!data.has("checkbox1")) {
    formData[6].setAttribute("data-error-visible", "true");
  } else {
    formData[6].setAttribute("data-error-visible", "false");
  }

  if (
    //If all fields have no error message
    formData[0].dataset.errorVisible === "false" &&
    formData[1].dataset.errorVisible === "false" &&
    formData[2].dataset.errorVisible === "false" &&
    formData[3].dataset.errorVisible === "false" &&
    formData[4].dataset.errorVisible === "false" &&
    formData[5].dataset.errorVisible === "false" &&
    formData[6].dataset.errorVisible === "false"
  ) {
    //Registration is valid, function registration reset form, close form modal and thanks modal open
    registration();
  }
}
