import getWeather from "./weather_api";
const showObject = async (location) => {
  const weatherAllData = await getWeather(location);
  await delay(3000);
  console.log(weatherAllData);
  document.querySelector('input').value= "";
  return {
    last_updated : weatherAllData.current.last_updated,
    localtime : weatherAllData.location.localtime,
    country: weatherAllData.location.country,
    city: weatherAllData.location.name,
    temp_c: weatherAllData.current.temp_c,
    feelslike_c: weatherAllData.current.feelslike_c,
    temp_f: weatherAllData.current.temp_f,
    feelslike_f: weatherAllData.current.feelslike_f,
    message : weatherAllData.current.condition.text,
    humidity: weatherAllData.current.humidity,
    isday: weatherAllData.current.is_day
  };
};
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export {showObject}