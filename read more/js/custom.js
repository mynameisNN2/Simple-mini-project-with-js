let btnElem = document.querySelector("button");
let spanDot = document.querySelector(".dot");
let spanmore = document.querySelector(".more");

btnElem.addEventListener("click", function () {
  if (spanDot.style.display === "none") {
    spanDot.style.display = "inline";
    spanmore.style.display = "none";
    btnElem.innerHTML = "Read more";
  } else {
    spanDot.style.display = "none";
    spanmore.style.display = "inline";
    btnElem.innerHTML = "Read less";
  }
});
