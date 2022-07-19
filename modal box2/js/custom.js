let btnElem = document.querySelector(".btn");

let modalElem = document.querySelector(".container");

let spanElem = document.querySelector(".xmark");

btnElem.addEventListener("click", () => {
  modalElem.style.display = "block";
});

spanElem.addEventListener("click", () => {
  modalElem.style.display = "none";
});
