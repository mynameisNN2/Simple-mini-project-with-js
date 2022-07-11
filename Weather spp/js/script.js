let citiesData = {
  tehran: {
    city: "Tehran",
    temp: 12,
    weather: "sunny",
    humidity: 23,
    windSpeed: 32,
  },
  shiraz: {
    city: "Shiraz",
    temp: 9,
    weather: "windy",
    humidity: 12,
    windSpeed: 25,
  },
  tabriz: {
    city: "Tabriz",
    temp: 1,
    weather: "rainy",
    humidity: 43,
    windSpeed: 16,
  },
  mashhad: {
    city: "Mashhad",
    temp: 16,
    weather: "snowy",
    humidity: 28,
    windSpeed: 56,
  },
  esfahan: {
    city: "Esfahan",
    temp: 23,
    weather: "sunny",
    humidity: 32,
    windSpeed: 18,
  },
};

let searchBtn = document.getElementById("search");
let searchBar = document.querySelector(".search-bar");

searchBtn.addEventListener("click", function () {
  let searchBarValue = searchBar.value;
  let maincitiesData = citiesData[searchBarValue];

  if (maincitiesData) {
    document.querySelector(".city").innerHTML =
      "Weather in " + maincitiesData.city;
    document.querySelector(".weather").classList.remove("loading");
    document.querySelector(".temp").innerHTML = maincitiesData.temp + " °C";
    document.querySelector(".description").innerHTML = maincitiesData.weather;
    document.querySelector(".humidity").innerHTML =
      "Humidity :" + maincitiesData.humidity;
    document.querySelector(".wind").innerHTML =
      "Wind Speed : " + maincitiesData.windSpeed + " Km/h";
  } else {
    alert("نام شهر را به درستی وارد کنید");
  }
});
