import { createForm } from "./Ui_controls";
export default async function getWeather( location){
  const API = `https://api.weatherapi.com/v1/current.json?key=1948554a53324324919204043242705&q=${location}`;
  const response =  await fetch (API , {mode : "cors"});
  if(!response.ok){
    throw new Error("Network Issue found");
  }
  const data = await response.json();
   return data;
  
}
 