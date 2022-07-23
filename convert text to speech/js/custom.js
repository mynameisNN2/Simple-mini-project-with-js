let inputElem = document.getElementById('input');

let btnElem = document.getElementById('button');


btnElem.addEventListener("click", () => {
    let valueinput = inputElem.value;
    speechSynthesis.speak(
        new SpeechSynthesisUtterance(valueinput)
    )
})


