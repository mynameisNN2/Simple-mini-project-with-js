let countrySelectBox = document.querySelector(".countrySelect");
let citySelect = document.querySelector(".citySelect");

let countrydata = {
  Iran: ["Tehran", "Ahwaz", "Esfahan", "Tabriz", "Mashhad"],
  Turkey: ["Istanbul", "Ezmir", "Ankara"],
  US: ["New York", "Chicago", "Los Angles"],
};

countrySelectBox.addEventListener("change", function () {
  if (countrySelectBox.value === "Please Select") {
    citySelect.innerHTML = "";
    citySelect.innerHTML += "<option>Select City ...</option>";
  } else {
    let maincountryName = countrySelectBox.value;
    let maincounrtycities = countrydata[maincountryName];

    citySelect.innerHTML = "";
    maincounrtycities.forEach(function (city) {
      citySelect.innerHTML += "<option>" + city + "</option>";
    });
  }
});
