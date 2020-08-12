const axios = require("axios").default;

const locations = [
  "Pakistan, Lahore",
  "Afghanistan, Kabul",
  "Brazil, Curitiba",
];

async function printTimeAndWeather(locations) {
  for (location of locations) {
    const weatherResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f1d2dfe8f5b5e69350af644692a6b641`
    );
    // we have only 5 free call of this api
    const timeResponse = await axios.get(
      `https://www.amdoren.com/api/timezone.php?api_key=qTXJkenGWqWPEdUi5d9zaeNdsvbFHf&loc=${location}`
    );

    const { weather } = weatherResponse.data;
    console.log(
      `${location}(Weather): ${weather[0].main} ${weather[0].description}, Time: ${timeResponse.data.time}`
    );
  }
}

printTimeAndWeather(locations);
