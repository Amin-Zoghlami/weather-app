import App from "./app.js";

export default (function addInputs() {
  const app = new App();

  const searchInput = document.getElementById("search");
  const searchButton = document.querySelector(".submit");
  searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    const location = searchInput.value;
    const weatherInfo = app
      .getData(location)
      .then((data) => app.processData(data));
    console.log(weatherInfo);
  });
});
