let cityInputEl = document.querySelector("#city-input");

let formSubmission = function(event) {
  event.preventDefault();
  //get value from city input
  let cityInput = cityInputEl.value.trim();
  if (cityInput) {
    debugger;
    console.log(cityInput)
    cityInputEl.value = "";
  } else {
    alert("Please enter a city");
  }
};

cityInputEl.addEventListener("submit", formSubmission);