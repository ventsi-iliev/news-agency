const citySelect = document.getElementById("city-select");
const weatherInfo = document.getElementById("weather-info");

const mockData = [
  {
    name: "sofia",
    temperature: 22,
  },
  {
    name: "varna",
    temperature: 32,
  },
  {
    name: "burgas",
    temperature: 30,
  },
  {
    name: "blagoevgrad",
    temperature: 40,
  },
  {
    name: "plovdiv",
    temperature: 26,
  },
  {
    name: "ruse",
    temperature: 21,
  },
  {
    name: "vidin",
    temperature: 35,
  },
];

let timer;
const applyFakeDelay = async () => {
  clearTimeout(timer);
  await new Promise((res) => {
    timer = setTimeout(() => {
      res();
    }, 1500);
  });
};

citySelect.addEventListener("change", async (e) => {
  citySelect.disabled = true;
  weatherInfo.querySelector(".loader").style.display = "inline-block";

  await applyFakeDelay();
  const getCity = e.target.value;
  weatherInfo.querySelector("#temperature").textContent =
    mockData[mockData.findIndex((el) => el.name === getCity)].temperature;

  weatherInfo.querySelector(".loader").style.display = "none";
  citySelect.disabled = false;
});
