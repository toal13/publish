let weather = {
  apiKey: "21532a30ebd020f625f38595cb1bb485",
  fetchWeather: function (city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q="
    + city
    + "&units=metric&appid="
    + this.apiKey,
    )
      .then((res) => res.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function(data) {
   const { name } = data;
   const { icon, description } = data.weather[0];
   const { temp, humidity }  = data.main;
   const { speed } = data.wind;
   console.log(name,icon,description,temp,humidity,speed)
   document.querySelector(".city").innerText = "Weather in " + name;
   document.querySelector(".icon").src =
   "https://openweathermap.org/img/wn/" + icon + ".png";
   document.querySelector(".description").innerText = description;
   document.querySelector(".temp").innerHTML = Math.floor(temp) + "°C";
   document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%";
   document.querySelector(".wind").innerHTML = "Wind speed: " + speed + "km/h";
   document.querySelector(".weather").classList.remove("loading");
   },
   search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
   }
};

document
.querySelector(".search button")
.addEventListener("click", function () {
  weather.search();
});

document
.querySelector(".search-bar")
.addEventListener("keyup", function(event) {
  if (event.key == "Enter") {
    weather.search();
  }
});

weather.fetchWeather("Tokyo");