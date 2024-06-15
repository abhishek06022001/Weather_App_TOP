import { createForm } from "./display";
import { showObject } from "./weather_data";
const render = () => {
  const { form, input, submitButton } = createForm();
  submitButton.onclick = async (e) => {
    e.preventDefault();
    const city = input.value;
    startLoader();
    try {
      const data = await showObject(city);
      console.log(data);
      clearCard();
      updateCard(data);
      console.log("hey updateCard called");
    } catch (error) {
      // alert("Please Enter a Valid City");
      console.log(error);
    } finally {
      stopLoader();
    }
    // alert("onclick complete thread will get free after this ")
  };
};
function startLoader() {
  // alert("Loader Called");

  document.querySelector('body').classList.add('loader');
}
function stopLoader() {
  // alert("Loader stopped");
    document.querySelector("body").classList.remove("loader");
}
function updateCard(data) {
  // alert(" updateCard called");
  const tempC = document.querySelector(".bottom");
  const svg = document.querySelector(".top");
  const place = document.querySelector(".place");
  const feelslike_C = document.querySelector(".feelsC");
  const feelslike_F = document.querySelector(".feelsF");
  const humidity = document.querySelector(".humid");
  const message = document.querySelector(".message");
  const localtime = document.querySelector(".localtime");
  const last_updated = document.querySelector(".last_updated");
  message.textContent = data.message;
  localtime.textContent =`The Current time is ${data.localtime}`;
  last_updated.textContent ="Last Update at: " +data.last_updated;
  feelslike_C.textContent = "Feels Like " + data.feelslike_c + " °C";
  feelslike_F.textContent = "Feels Like " + data.feelslike_f + " °F";
  humidity.textContent = `humidity : ${data.humidity} %`;
  place.textContent = `The Country is  ${data.country} and the City is  ${data.city}`;
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
  // alert("  updateCard  done");
}
function clearCard() {
  const cardDiv = document.querySelector(".bottom");
  cardDiv.textContent = "";
}

export { render };
