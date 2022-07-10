// get the elements
let btnElem = document.getElementById("btn");
let imgElem = document.getElementById("bulb");
let flag = false;

function turnOffOrOn() {
  if (flag) {
    imgElem.setAttribute("src", "pics/bulboff.gif");
    btnElem.innerHTML = "Turn on";
    flag = false;
  } else {
    imgElem.setAttribute("src", "pics/bulbon.gif");
    btnElem.innerHTML = "Turn off";
    flag = true;
  }
}
