let btnElem = document.querySelector("#mybtn");

let modalElem = document.querySelector(".modal");

let closeElem = document.querySelector(".close");

closeElem.addEventListener("click", function () {
  modalElem.style.display = "none";
});

btnElem.addEventListener("click", function () {
  modalElem.style.display = "block";
});
