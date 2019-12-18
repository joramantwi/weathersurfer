class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.temperature = document.getElementById('w-temp');
    this.humidity = document.getElementById('w-humidity');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent =`${weather.name}, ${weather.sys.country}`;;
    this.desc.textContent = weather.weather[0].description;
    this.temperature.textContent = `Temperature: ${Math.floor(weather.main.temp - 273)} °C`;
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
    this.wind.textContent = `Wind: ${Math.floor(weather.wind.speed * 2.237)} mph`;
  }
}


