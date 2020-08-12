const axios = require("axios").default;

const locations = [
  "Pakistan, Lahore",
  "Afghanistan, Kabul",
  "Brazil, Curitiba",
];

const WEATHER_API_KEY = "f1d2dfe8f5b5e69350af644692a6b641";
const TIME_API_KEY = "qTXJkenGWqWPEdUi5d9zaeNdsvbFHf";

async function printTimeAndWeather(locations) {
  for (location of locations) {
    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WEATHER_API_KEY}`
      );
      // we have only 5 free call of this api
      const timeResponse = await axios.get(
        `https://www.amdoren.com/api/timezone.php?api_key=${TIME_API_KEY}&loc=${location}`
      );

      const { weather } = weatherResponse.data;
      console.log(
        `${location}(Weather): ${weather[0].main} ${weather[0].description}, Time: ${timeResponse.data.time}`
      );
    } catch (error) {
      console.log("Error: ", error);
      if (error.message) {
        console.log("Error Message: ", error.message);
      } else {
        console.log("Error: Something went wrong.");
      }
    }
  }
}

printTimeAndWeather(locations);
