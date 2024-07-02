const citySelect = document.getElementById("city-select");
const weatherInfo = document.getElementById("weather-info");

// const mockData = [
//   {
//     name: "sofia",
//     temperature: 22,
//   },
//   {
//     name: "varna",
//     temperature: 32,
//   },
//   {
//     name: "burgas",
//     temperature: 30,
//   },
//   {
//     name: "blagoevgrad",
//     temperature: 40,
//   },
//   {
//     name: "plovdiv",
//     temperature: 26,
//   },
//   {
//     name: "ruse",
//     temperature: 21,
//   },
//   {
//     name: "vidin",
//     temperature: 35,
//   },
// ];

// let timer;
// const applyFakeDelay = async () => {
//   clearTimeout(timer);
//   await new Promise((res) => {
//     timer = setTimeout(() => {
//       res();
//     }, 1500);
//   });
// };

// citySelect.addEventListener("change", async (e) => {
//   citySelect.disabled = true;
//   weatherInfo.querySelector(".loader").style.display = "inline-block";

//   await applyFakeDelay();
//   const getCity = e.target.value;
//   weatherInfo.querySelector("#temperature").textContent =
//     mockData[mockData.findIndex((el) => el.name === getCity)].temperature;

//   weatherInfo.querySelector(".loader").style.display = "none";
//   citySelect.disabled = false;
// });

// Real functionality
function getWeather(city) {
  let apiKey = "3a5462b7487c9ddd3d46e5d7df1623b2";
  let apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    apiKey +
    "&units=metric";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      let temperature = Math.round(data.main.temp);

      document.getElementById("temperature").innerHTML = temperature + " °C";

      let weatherMain = data.weather[0].main;
      let imageURL;
      if (weatherMain === "Thunderstorm") {
        imageURL = "./images/thunderstorm.png";
      } else if (weatherMain === "Drizzle") {
        imageURL = "./images/drizzle.png";
      } else if (weatherMain === "Rain") {
        imageURL = "./images/rain.png";
      } else if (weatherMain === "Snow") {
        imageURL = "./images/snow.png";
      } else if (weatherMain === "Mist" || weatherMain === "Fog") {
        imageURL = "./images/fog.png";
      } else if (weatherMain === "Clear") {
        imageURL = "./images/clear.png";
      } else if (weatherMain === "Clouds") {
        imageURL = "./images/clouds.png";
      }

      document.getElementById("weather-image").src = imageURL;

      document.getElementById("weather-description").innerHTML = weatherMain;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}

function changeCity() {
  let selectedCity = citySelect.value;
  let cityName;

  if (selectedCity === "sofia") {
    cityName = "София";
  } else if (selectedCity === "varna") {
    cityName = "Варна";
  } else if (selectedCity === "burgas") {
    cityName = "Бургас";
  } else if (selectedCity === "blagoevgrad") {
    cityName = "Благоевград";
  } else if (selectedCity === "plovdiv") {
    cityName = "Пловдив";
  } else if (selectedCity === "ruse") {
    cityName = "Русе";
  } else if (selectedCity === "vidin") {
    cityName = "Видин";
  }

  document.getElementById("city-name").innerHTML = cityName;
  getWeather(selectedCity);
}

citySelect.addEventListener("change", changeCity);

getWeather("sofia");
