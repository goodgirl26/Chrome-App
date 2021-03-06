const clockContainer = document.querySelector(".js-clock");
const clockTitle = document.querySelector("h1");

function getTIme() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function init() {
  getTIme();
}

init();
