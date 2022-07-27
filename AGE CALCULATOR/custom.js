
let datepicker = document.getElementById("date-picker");
let chooseDate = document.getElementById("chooseDate");

let ageyear = document.getElementById("ageyear");
let monthyear = document.getElementById("monthyear");
let daysyear = document.getElementById("daysyear");
let hoursyear = document.getElementById("hoursyear");
let ageseconds = document.getElementById("ageseconds");
let agemiliseconds = document.getElementById("agemiliseconds");

datepicker.addEventListener("change", function () {

    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    let selectedDate = new Date(this.value);
    let DOB = selectedDate.toLocaleDateString("en-US", options);
    chooseDate.innerHTML = "DOB :" + " " + DOB;

    let miliSeconds_Btw_DOB = Date.parse(DOB);
    let miliSeconds_Btw_NOW = Date.now();
    let age_in_miliseconds = (miliSeconds_Btw_NOW - miliSeconds_Btw_DOB);

    let miliSeconds = Number(age_in_miliseconds);
    let second = 1000;
    let minutes = Number(second * 60);
    let hour = Number(minutes * 60);
    let day = Number(hour * 24);
    let month = Number(day * 30);
    let year = Number(month * 12);
    
    let years = Math.round(miliSeconds / (year));
    let months = years * 12;
    let days = years * 365;
    let hours = Math.round(miliSeconds / (hour));
    let seconds = Math.round(miliSeconds / (second));

    ageyear.innerHTML = years;
    monthyear.innerHTML = months;
    daysyear.innerHTML = days;
    hoursyear.innerHTML = hours;
    ageseconds.innerHTML = seconds;
    agemiliseconds.innerHTML = miliSeconds;

    document.querySelector(".age-calc").classList.add('expand');
})