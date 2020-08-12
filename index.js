const axios = require("axios").default;

async function foo() {
  for (location of [1, 2, 3]) {
    console.log(location);
    const locationRes = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?q=pakistan&appid=f1d2dfe8f5b5e69350af644692a6b641"
    );
    const timeRes = await axios.get(
      "https://www.amdoren.com/api/timezone.php?api_key=WTgxAsJVA74faYS7cspnxHYCmaMxNw&loc=Pakistan,%20Lahore"
    );
    console.log(timeRes.data);
  }
}

foo();
