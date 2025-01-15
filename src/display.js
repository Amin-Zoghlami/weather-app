export default function updateDisplay(info) {
  console.log(info);
  const addressDisplay = document.getElementById("address");
  const iconDisplay = document.getElementById("icon");
  const tempDisplay = document.getElementById("temp");
  const feelslikeDisplay = document.getElementById("feelslike");
  const conditionsDisplay = document.getElementById("conditions");
  const humidityDisplay = document.getElementById("humidity");
  const windspeedDisplay = document.getElementById("windspeed");

  addressDisplay.textContent = info.address;
  iconDisplay.src = `./img/${info.icon}.svg`;
  iconDisplay.alt = info.icon;
  tempDisplay.textContent = `${info.temp}°F`;
  feelslikeDisplay.textContent = `Feels like ${info.feelslike}°F`;
  conditionsDisplay.textContent = info.conditions;
  humidityDisplay.textContent = `Humidity of ${info.humidity}%`;
  windspeedDisplay.textContent = `Average wind speed of ${info.windspeed} mph`;
}
