let videoElem = document.getElementById("myVideo");

let btnElem = document.querySelector(".myBtn");

let btnElem2 = document.querySelector(".myBtn-1");

btnElem2.addEventListener("click", function () {
  if ((btnElem2.innerHTML = "Play")) {
    videoElem.play();
  }
});

btnElem.addEventListener("click", function () {
  if ((btnElem.innerHTML = "Pause")) {
    videoElem.pause();
  }
});
