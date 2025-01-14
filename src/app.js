export default class App {
  async getData(location) {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=WVMGYWTFRBUX6WZXAMZENSBDT`
    );
    const data = await response.json();
    console.log(data);
    return data;
  }

  processData(data) {
    const weather = data.currentConditions;

    const weatherInfo = {
      conditions: weather.conditions,
      feelslike: weather.feelslike,
      humidity: weather.humidity,
      temp: weather.temp,
      windspeed: weather.windspeed,
    };
    console.log(weatherInfo);
    return weatherInfo;
  }
}
