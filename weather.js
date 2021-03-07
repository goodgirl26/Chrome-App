const API_KEY = "faca43da258e7afb390357ff19710300";
const COORDS = "coords";

function saveCoords(coords) {
  localStorage.setItem(COORDS, JSON.stringify(coords));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coords = {
    latitude: latitude,
    longitude: longitude,
  };
  saveCoords(coords);
}

function handleGeoError() {
  console.log("Cant access geolocation");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const loadedcords = localStorage.getItem(COORDS);
  if (loadedcords === null) {
    askForCoords();
  } else {
  }
}

function init() {
  loadCoords();
}
init();
