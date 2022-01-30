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
/*const inputFirst = document.getElementById("first");
const inputLast = document.getElementById("last");
const inputEmail = document.getElementById("email");
const inputBirthdate = document.getElementById("birthdate");
const inputQuantity = document.getElementById("quantity");*/

let form = document.querySelector("form");

//verify if firstname has min 2 characters and no numeric value
function validName(text) {
  return /^[a-zA-Zéèàê' -]{2,}$/.test(text);
}

//********Check firstname field******
form.first.addEventListener("change", function () {
  validName(this);
  console.log(validName(form.first.value));

  if (!validName(form.first.value)) {
    formData[0].setAttribute("data-error-visible", "true");
    return false;
  } else {
    formData[0].setAttribute("data-error-visible", "false");
    return true;
  }
});

//********Check lastname field******
form.last.addEventListener("change", function () {
  validName(this);
  console.log(validName(form.last.value));

  if (!validName(form.last.value)) {
    formData[1].setAttribute("data-error-visible", "true");
    return false;
  } else {
    formData[1].setAttribute("data-error-visible", "false");
    return true;
  }
});

//********Check email field******
form.email.addEventListener("change", function () {
  validEmail(this);
  console.log(validEmail(form.email.value));
  //verify if email field is not empty
  if (form.email.value === "") {
    formData[2].setAttribute("data-error", "le champs est vide");
    formData[2].setAttribute("data-error-visible", "true");
    return false;
    //verify if email is valid
  } else if (!validEmail(form.email.value)) {
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
form.birthdate.addEventListener("change", function () {
  validBirthdate(this);
  console.log(validBirthdate(form.birthdate.value));
  //verify if birthdate field is not empty
  if (form.birthdate.value === "jj/mm/aaaa") {
    formData[3].setAttribute("data-error", "le champs est vide");
    formData[3].setAttribute("data-error-visible", "true");
    return false;
    //verify if birthdate is passed
  } else if (!validBirthdate(form.birthdate.value)) {
    formData[3].setAttribute("data-error-visible", "true");
    return false;
  } else {
    formData[3].setAttribute("data-error-visible", "false");
    return true;
  }
});

function validBirthdate(birthdate) {
  const date = new Date(form.birthdate.value);

  if (date.getTime() < Date.now()) {
    return true;
  } else {
    return false;
  }
}

/*
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

  
 registration();
}
*/
