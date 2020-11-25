/* TODO: when the submit button is clicked it should verify if the field are empty, 
if empty it should add an inner text to the msg div  */

const myForm = document.querySelector("#myForm");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#pass");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();

  validation();
});

function validation() {
  if (firstName.value === "") {
    giveErrorMessage(firstName, "First Name cannot be empty");
  } else {
    testSuccess(firstName);
  }

  if (lastName.value === "") {
    giveErrorMessage(lastName, "Last Name cannot be empty");
  } else {
    testSuccess(lastName);
  }

  if (email.value === "") {
    giveErrorMessage(email, "Email cannot be empty");
  } else if (!validEmail(email.value)) {
    giveErrorMessage(email, "Not a valid email");
  } else {
    testSuccess(email);
  }

  if (password.value === "") {
    giveErrorMessage(password, "Password cannot be empty");
  } else {
    testSuccess(password);
  }
}

function giveErrorMessage(input, message) {
  const inputDiv = input.parentElement;
  console.log(inputDiv);
  errorMsg = inputDiv.querySelector(".errorMsg");
  errorMsg.innerText = message;
  console.log(errorMsg.innerText);
}

function testSuccess(input) {
  console.log(`the input for ${input.getAttribute("id")} is ${input.value}`);
  const inputDiv = input.parentElement;
  errorMsg = inputDiv.querySelector(".errorMsg");
  errorMsg.innerText = "";
}

function validEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
