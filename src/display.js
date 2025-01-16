import clearDayImage from "./img/clear-day.png";
import clearNightImage from "./img/clear-night.png";
import cloudyImage from "./img/cloudy.png";
import fogImage from "./img/fog.png";
import partlyCloudyDayImage from "./img/partly-cloudy-day.png";
import partlyCloudyNightImage from "./img/partly-cloudy-night.png";
import rainImage from "./img/rain.png";
import snowImage from "./img/snow.png";
import windImage from "./img/wind.png";

export default function updateDisplay(info) {
  const iconImages = {
    "clear-day": clearDayImage,
    "clear-night": clearNightImage,
    cloudy: cloudyImage,
    fog: fogImage,
    "partly-cloudy-day": partlyCloudyDayImage,
    "partly-cloudy-night": partlyCloudyNightImage,
    rain: rainImage,
    snow: snowImage,
    wind: windImage,
  };

  const addressDisplay = document.getElementById("address");
  const iconDisplay = document.getElementById("icon");
  const tempDisplay = document.getElementById("temp");
  const feelslikeDisplay = document.getElementById("feelslike");
  const conditionsDisplay = document.getElementById("conditions");
  const humidityDisplay = document.getElementById("humidity");
  const windspeedDisplay = document.getElementById("windspeed");

  addressDisplay.textContent = info.address;
  iconDisplay.src = iconImages[info.icon];
  iconDisplay.alt = info.icon;
  tempDisplay.textContent = `${info.temp}°F`;
  feelslikeDisplay.textContent = `Feels like ${info.feelslike}°F`;
  conditionsDisplay.textContent = info.conditions;
  humidityDisplay.textContent = `Humidity of ${info.humidity}%`;
  windspeedDisplay.textContent = `Average wind speed of ${info.windspeed} mph`;
}
