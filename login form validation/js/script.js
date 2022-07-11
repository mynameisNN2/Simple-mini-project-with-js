// get the inputs and button

let usernameElem = document.querySelector(".username");
let passwordElem = document.querySelector(".password");
let modalElem = document.querySelector(".modal");

function dataValidation() {
  let userValue = usernameElem.Value;
  let passvalue = passwordElem.value;

  if (userValue.lenght < 12 || passvalue.lenght < 8) {
    modalElem.style.display = "inline";
    modalElem.style.background = "red";
    modalElem.innerHTML = "اطلاعات را به درستی وارد نمایید";
  } else {
    modalElem.style.display = "inline";
    modalElem.style.background = "green";
    modalElem.innerHTML = "اطلاعات با موفقیت ثبت شد";
  }
  setTimeout(function(){
    modalElem.style.display = "none";
  }, 3000);
}
