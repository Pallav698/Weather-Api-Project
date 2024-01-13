const apiKey = "6af6ae6ef08fae5f87c6279a2cc2e08a";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const input = document.querySelector(".search input");
const btn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);
    
    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerText = data.main.humidity + "%";
    document.querySelector(".wind").innerText = data.wind.speed + "Km/hr";

    if(data.weather[0].main === "Clouds"){
        weatherIcon.src = "images/Clouds.png";
    }
    else if(data.weather[0].main === "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main === "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main === "Mist"){
        weatherIcon.src = "images/mist.png";
    }
    else if(data.weather[0].main === "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main === "Snow"){
        weatherIcon.src = "images/snow.png";
    }
}  

btn.addEventListener("click", () => {
  const city = input.value;
  checkWeather(city);
});