function submitCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#details");
  let city = document.querySelector("h1");
  city.innerHTML = searchInput.value;
}
let searchForm = document.querySelector("#form");
searchForm.addEventListener("submit", submitCity);
