let btnElem = document.querySelector(".btn");

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnElem.style.display = "block";
  } else {
    btnElem.style.display = "none";
  }
};

btnElem.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
});
