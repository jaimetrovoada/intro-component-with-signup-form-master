const Msg = document.querySelectorAll(".errorMsg");
console.log(Msg);

const submit = document.querySelector("button").onclick;
function test() {
  const errorMsg = Msg.innerText("This Field Cannot be Empty");
  if (document.querySelectorAll("input") == "") {
    return errorMsg;
  }
}
