import "./style.css";
import { settings, getDegrees, changeDegrees } from "./weather";

const API =
  "https://api.weatherapi.com/v1/current.json?key=fd8e96a88b8f4e0690f133006232407&q=";

export async function getAPI(location = "belo horizonte") {
  try {
    const response = await fetch(API + location);
    const data = await response.json();
    settings(data);
    return data;
  } catch (err) {
    window.alert("Not found" + err);
  }
}

const APIdata = getAPI();

const searchBtn = document.querySelector(".search-btn");
const searchBox = document.querySelector(".search-box");

searchBtn.addEventListener("click", () => {
  getAPI(searchBox.value);
});

searchBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getAPI(searchBox.value);
  }
});

const celsius = document.querySelector(".celsius");
const fah = document.querySelector(".fahrenheit");

console.log(celsius);

celsius.addEventListener("click", () => {
  changeDegrees("C");
});
fah.addEventListener("click", () => {
  changeDegrees("F");
});
