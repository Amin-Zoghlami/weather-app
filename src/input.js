import App from "./app.js";
import updateDisplay from "./display.js";

export default (function addInputs() {
  const app = new App();

  const searchInput = document.getElementById("search");
  const searchButton = document.querySelector(".submit");

  searchInput.addEventListener("input", () => {
    searchInput.setCustomValidity("");
    searchInput.reportValidity();
  });

  searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    const location = searchInput.value;
    app
      .getData(location)
      .then((data) => app.processData(data))
      .then((info) => updateDisplay(info))
      .catch(() => {
        searchInput.setCustomValidity("Location not found");
        searchInput.reportValidity();
      });
  });
});
