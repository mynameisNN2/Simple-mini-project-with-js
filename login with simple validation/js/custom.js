let InputElem = document.getElementById("text");
let formElem = document.getElementById("form");

formElem.addEventListener("submit", function () {
  if (InputElem.value == "") {
    alert("Please fill it");
  }
});
