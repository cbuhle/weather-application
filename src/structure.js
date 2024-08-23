function updatePage(response) {
  let temp = document.querySelector("#degrees");
  let degrees = response.data.temperature.current;
  temp.innerHTML = Math.round(degrees);
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.temperature.humidity;
  let windSpeed = document.querySelector("#wind");
  windSpeed.innerHTML = response.data.wind.speed;
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time);
  timeElement.innerHTML = formatDate(date);
  console.log(formatDate(date));
}
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let minutes = date.getMinutes();
  let hours = date.getHours();
  console.log(date.getHours);
  return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
  let key = "34e269e9f408e8fa6ft73afaob64bf6c";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`;
  axios.get(apiUrl).then(updatePage);
}

function submitCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#details");
  let city = document.querySelector("h1");
  city.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}
let searchForm = document.querySelector("#form");
searchForm.addEventListener("submit", submitCity);
