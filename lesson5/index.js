const API_KEY = "06e792bf4bc643a814b9797738f52189"
const searchInput = document.getElementById("search-input")
const cityName = document.querySelector(".city-name")
const weatherIcon = document.querySelector(".weather-icon")
const temperature = document.querySelector(".temperature")
const sunrise = document.querySelector(".sunrise")
const sunset = document.querySelector(".sunset")
const humidity = document.querySelector(".humidity")
const windSpeed = document.querySelector(".wind-speed")

searchInput.addEventListener("change", (event)=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=${API_KEY}&units=metric&lang=vi`)
        .then(response => response.json())
        .then((data) => {
            cityName.innerHTML = data.name 
            weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            temperature.innerHTML = Math.round(data.main.temp)
            humidity.innerHTML = data.main.humidity
            windSpeed.innerHTML = data.wind.speed
            sunrise.innerHTML = data.sys.sunrise
            sunset.innerHTML = data.sys.sunset
        })
})
