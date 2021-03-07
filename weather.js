const weather = document.querySelector(".js-weather");

const API_KEY = "faca43da258e7afb390357ff19710300";
const COORDS = "coords";

function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temp = json.main.temp;
      const place = json.name;
      weather.innerText = `${temp}°C @ ${place}`;
    });
}

function saveCoords(coords) {
  localStorage.setItem(COORDS, JSON.stringify(coords));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coords = {
    latitude,
    longitude,
  };
  saveCoords(coords);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log("Cant access geolocation");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const loadedcoords = localStorage.getItem(COORDS);
  if (loadedcoords === null) {
    askForCoords();
  } else {
    const parsedCoords = JSON.parse(loadedcoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init() {
  loadCoords();
}
init();
