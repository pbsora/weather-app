import "./style.css";

const degrees = document.querySelector(".degrees");

const API =
  "https://api.weatherapi.com/v1/current.json?key=fd8e96a88b8f4e0690f133006232407&q=belo horizonte";

async function getAPI() {
  const response = await fetch(API);
  const data = await response.json();
  degrees.textContent = data.current.temp_c + "°";
  settings(data);
  return data;
}

const settings = (data) => {
  console.log(data.current.temp_c);
  console.log(data.current.temp_f);
  console.log(data.current.is_day);
  console.log(data.current.humidity);
};

const APIdata = await getAPI();
console.log(APIdata);
