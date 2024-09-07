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
  let date = new Date(response.data.time * 1000);
  timeElement.innerHTML = formatDate(date);
  function showIcon(src, width, height, alt) {
    let img = document.createElement("img");
    img.src = src;
    img.width = width;
    Img.height = height;
    Img.alt = alt;
    document.body.appendChild(img);
  }
  showIcon(response.data.condition.icon_url);
  let icon = document.querySelector("#temp");
  //let icon = document.createElement("Icon_Url");
  //icon.innerHTML = response.data.condition.icon_url;
  console.log(response.data);
}
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
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
function displayForecast() {
  let days = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
  let forecastHTML = "";
  days.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      ` <li>
                <div class="forecast-date">
                <div class="forecast-day"> ${day}</div>
                <div class="forecast-icon">⛅</div>
                <div class="forecast-temperature"> 20℃</div>
                </div></li>
             `;
  });
}
let forecast = document.querySelector("#forecast");
console.log(forecast);

//forecast.innerHTML = forecastHTML;
