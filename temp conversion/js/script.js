// get the elem and btn
let changeBtn = document.querySelector(".changeButton");
let resetBtn = document.querySelector(".resetButton");
let convertBtn = document.querySelector(".convertButton");
let inputElem = document.querySelector("#converter");
let firstValuespan = document.querySelector(".C");
let secondValuespan = document.querySelector(".F");
let result = document.querySelector(".result");

changeBtn.addEventListener("click", function () {
  if (inputElem.getAttribute("placeholder") == "°C") {
    document.title = "Nima Noorali | °F to °C";
    inputElem.setAttribute("placeholder", "°F");
    firstValuespan.innerHTML = "°F";
    secondValuespan.innerHTML = "°C";
  } else {
    document.title = "Nima Noorali | °C to °F";
    inputElem.setAttribute("placeholder", "°C");
    firstValuespan.innerHTML = "°C";
    secondValuespan.innerHTML = "°F";
  }
});

resetBtn.addEventListener("click", function () {
  inputElem.value = "";
  result.innerHTML = "";
});

convertBtn.addEventListener("click", function () {
  if (inputElem.value === "") {
    result.innerHTML = "Please insert correct value";
    result.style.color = "red";
  } else {
    if (firstValuespan.innerHTML === "°C") {
      let resultvalue = inputElem.value * 1.8 + 32;
      result.style.color = "yellow";
      result.innerHTML = inputElem.value + " °C to " + resultvalue + " °F";
    } else {
      let resultvalue = (inputElem.value - 32) * 5 / 9;
      result.style.color = "yellow";
      result.innerHTML = inputElem.value + " °F to " + resultvalue.toFixed(2) + " °C";
    }
  }
});
