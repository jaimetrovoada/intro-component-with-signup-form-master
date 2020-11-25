/* TODO: when the submit button is clicked it should verify if the field are empty, 
if empty it should add an inner text to the msg div  */

const myForm = document.querySelector("#myForm");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#pass");

const firstNameMsg = document.querySelector("#firstNameMsg");
const lastNameMsg = document.querySelector("#lastNameMsg");
const emailMsg = document.querySelector("#emailMsg");
const passMsg = document.querySelector("#passMsg");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (firstName.value === "") {
    firstNameMsg.classList.add("errorMsg");
    firstNameMsg.innerText = "First Name cannot be empty";
    setTimeout(() => firstNameMsg.remove(), 1500);
  }
  if (lastName.value === "") {
    lastNameMsg.classList.add("errorMsg");
    lastNameMsg.innerText = "Last Name cannot be empty";
    setTimeout(() => lastNameMsg.remove(), 1500);
  }
  if (email.value === "") {
    emailMsg.classList.add("errorMsg");
    emailMsg.innerText = "email cannot be empty";
    setTimeout(() => emailMsg.remove(), 1500);
  }
  if (password.value === "") {
    passMsg.classList.add("errorMsg");
    passMsg.innerText = "Password cannot be empty";
    setTimeout(() => passMsg.remove(), 1500);
  }
}