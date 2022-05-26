var city = document.querySelector(".city");
var weather_information_text = document.querySelector(".weather_information_text");
var weather_info_image = document.querySelector(".weather_information-image");
var feels_like = document.querySelector(".feels_like");
var humidity = document.querySelector(".humidity");
var pressure = document.querySelector(".pressure");
var temperature = document.querySelector(".temperature");
var wind_speed = document.querySelector(".wind_speed");
var wind_deg = document.querySelector(".wind_deg");

async function fetchText() {
    let data = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Baku&exclude=hourly,minutely&units=metric&appid=37386194883ac24155ba7ca40dfc3582").then((res) => res.json());
    console.log(data);
    city.innerText = data.name;
    weather_information_text.innerText = data.weather[0].main;
    weather_info_image.src = "https://www.freeiconspng.com/thumbs/sun-icon/sun-icon-31.png";
    feels_like.innerText =  data.main.feels_like;
    humidity.innerHTML += data.main.humidity + " " + `<i class="fa-solid fa-water"></i>`;
    pressure.innerText = data.main.pressure;
    temperature.innerText = data.main.temp + "°";
    wind_speed.innerHTML += data.wind.speed + " " + `<i class="fa-solid fa-wind"></i>`;
    wind_deg.innerHTML += data.wind.deg + "° " + `<i class="fa-solid fa-wind"></i>`;
}

fetchText();

AOS.init();
