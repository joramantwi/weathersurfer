class Weather {
  constructor(city) {
    this.apiKey = '82005d27a116c2880c8f0fcb866998a0';
    this.city = city;
  }

  // Fetch weather from API      
  async getWeather() {              
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);
    const data = await response.json();

    return data;
  }

  async getUserLocation() {              
    const response = await fetch(`https://ipinfo.io/json`);
    const data = await response.json();
    console.log(data.name);
    return data.name;
  }

  // Change weather location
  changeLocation(city) {
    this.city = city
  }
}

class surfLocations {
 
  async getLocation() {              
      const response = await fetch(`http://api.spitcast.com/api/spot/all`);
      const bulkData = await response.json();
      
      console.log(bulkData);
      

      let unique = [...new Set(bulkData.map(item => item.county_name))]; 
      console.log(unique);
      return bulkData;
    }
}



