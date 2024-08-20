import axios from "axios";
function updatePage(response) {
  let temp = document.querySelector("#degrees");
  let degrees = response.data.temperature.current;
  temp.innerHTML = Math.round(degrees);
  console.log(response.data.temperature.current);
}

function searchCity() {
  let key = "34e269e9f408e8fa6ft73afaob64bf6c";
  let apiUrl =
    "https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric";
  axios.get(apiUrl).then(updatePage);
}

function submitCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#details");
  let city = document.querySelector("h1");
  city.innerHTML = searchInput.value;
}
let searchForm = document.querySelector("#form");
searchForm.addEventListener("submit", submitCity);
