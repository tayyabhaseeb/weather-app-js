"use strict";

const inputValue = document.getElementById("input");
const searchBtn = document.getElementById("searchBtn");
const weatherContainer = document.getElementById("weather-cont");

// ! First Render to when screen Loads
navigator.geolocation.getCurrentPosition((position) => {
  fetch(
    `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`
  )
    .then((response) => response.json())
    .then((data) => {
      render(data);
    });
});

// ! Render when btn clicked

searchBtn.addEventListener("click", function () {
  //   console.log(inputValue.value);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&units=metric&appid=750f3f5e2cda3e4f834b61b030ca035d`
  )
    .then((response) => response.json())
    .then((data) => {
      render(data);
    });
});

// * Reusable Function

function render(data) {
  const visibility = data.visibility / 1000;

  weatherContainer.innerHTML = `
    
    <div class="img-cont">
    <img
      src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
      class="icon-img"
    />
    <p class="temp">${data.main.temp.toFixed(0)}°C</p>
  </div>
  <div class="data-cont">
    <div class="row-one">
      <div class="child-cont">
        <p>Feels like</p>
        <p>${data.main.feels_like.toFixed(0)}°C</p>
      </div>
      <div class="child-cont">
        <p>wind</p>
        <p>${data.wind.speed}km/h</p>
      </div>
    </div>
    <div class="row-two">
      <div class="child-cont">
        <p>Humidity</p>
        <p>${data.main.humidity}%</p>
      </div>
      <div class="child-cont">
        <p>Visibility</p>
        <p>${visibility}km</p>
      </div>
    </div>
  </div>
    
    `;
}
