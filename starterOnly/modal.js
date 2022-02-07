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

//when registration is valid, function reset form, close form modal and thanks modal open
function registration() {
  input.reset();
  modalThanks.style.display = "block";
  modalbg.style.display = "none";
}

//********Validation form for registration******

let input = document.querySelector("form");

//verify if name has min 2 characters and no numeric value
function validName(text) {
  return /^[a-zA-Zéèàê' -]{2,}$/.test(text);
}

//********Check firstname field******
input.first.addEventListener("input", function () {
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
    formData[2].setAttribute("data-error", "");
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

//********Check quantity field******
input.quantity.addEventListener("input", function () {
  //verify if quantity field is not empty
  if (input.quantity.value === "") {
    formData[4].setAttribute("data-error-visible", "true");
    return false;
  } else {
    formData[4].setAttribute("data-error-visible", "false");
    return true;
  }
});

//********Function when click on button "c'est parti!"******

function validate() {
  let data = new FormData(document.querySelector("form"));

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
