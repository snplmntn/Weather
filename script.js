const apiKey = "b4e88b4689fa41e3965155325230904";
let searchPlace = document.querySelector(".search");

//DOM elements
const city = document.querySelector(".city-name");
const country = document.querySelector(".city-country");
const temp = document.querySelector(".city-temp");
const weatherStats = document.querySelector(".city-weather");
const weatherIcon = document.querySelector(".city-status");
const weatherContainer = document.querySelector(".city-weather-container");
const prompt = document.querySelector(".prompt");
console.log(prompt);
//fetch api
searchPlace.addEventListener("keyup", async function (e) {
  try {
    if (e.key === "Enter") {
      weatherContainer.classList.remove("hidden");
      prompt.classList.add("hidden");
      const weatherAPI = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${searchPlace.value}&aqi=no`
      );
      const weatherObject = await weatherAPI.json();
      console.log(weatherObject);
      city.innerHTML = weatherObject.location.name;
      country.innerHTML = weatherObject.location.country;
      temp.innerHTML = `${weatherObject.current.temp_c} &#8451;`;
      weatherStats.innerHTML = weatherObject.current.condition.text;
      //   weatherIcon.classList.remove("hidden");
      weatherIcon.style.backgroundImage = `url(${weatherObject.current.condition.icon})`;
      console.log();
    } else {
      prompt.innerHTML = "Hit enter to Proceed";
      weatherContainer.classList.add("hidden");
      prompt.classList.remvoe("hidden");
    }
  } catch (err) {
    city.innerHTML = "Error";
    country.innerHTML = "Error";
    temp.innerHTML = "Error";
    weatherIcon.classList.add("hidden");
    weatherStats.innerHTML = "An error occured while sending the request";
  }
});
