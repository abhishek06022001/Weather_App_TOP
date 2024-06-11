import { createForm } from "./display";
import { showObject } from "./weather_data";
const render = () => {
  const { form, input, submitButton } = createForm();
  submitButton.onclick = async (e) => {
    e.preventDefault();
    const city = input.value;
    try {
      const data = await showObject(city);
      console.log(data);
      clearCard();
      updateCard(data);
    } catch (error) {
      alert("Please Enter a Valid City");
      console.log(error);
    }
  };
};

function updateCard(data) {
  const tempC = document.querySelector(".bottom");
  const svg = document.querySelector(".top");
  const place = document.querySelector(".place");
  const feelslike_C = document.querySelector(".feelsC");
  const feelslike_F = document.querySelector(".feelsF");
  const humidity = document.querySelector(".humid");
  const message = document.querySelector(".message");
  message.textContent = data.message;
  feelslike_C.textContent ="Feels Like "+ data.feelslike_c + " °C";
  feelslike_F.textContent = "Feels Like "+data.feelslike_f + " °F";
  humidity.textContent = `humidity : ${data.humidity}`;
  place.textContent = `${data.country},${data.city}` ;
  tempC.textContent = data.temp_c + " °C";
  if (!data.isday) {
    const img = document.createElement("img");
    img.src = require("./night-with-stars-svgrepo-com.svg");
    img.alt = "Rain Icon";

    while (svg.firstElementChild) {
      svg.removeChild(svg.firstElementChild);
    }
    svg.appendChild(img);
  } else {
    const img = document.createElement("img");
    img.src = require("./sunny-svgrepo-com.svg");
    img.alt = "Sunny Icon";
    while (svg.firstElementChild) {
      svg.removeChild(svg.firstElementChild);
    }
    svg.appendChild(img);
  }
  
  
}
function clearCard() {
  const cardDiv = document.querySelector(".bottom");
  cardDiv.textContent = "";
}


export { render };
