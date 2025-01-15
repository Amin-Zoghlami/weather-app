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

    const info = {
      address: data.resolvedAddress,
      conditions: weather.conditions,
      feelslike: weather.feelslike,
      humidity: weather.humidity,
      icon: weather.icon,
      temp: weather.temp,
      windspeed: weather.windspeed,
    };
    console.log(info);
    return info;
  }
}
