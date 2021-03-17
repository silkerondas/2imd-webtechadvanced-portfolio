class App {
    constructor() {
        console.log("hey!");
        this.getLocation();
    }

    getLocation(){
        navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        console.log(lat,lng);
        this.getWeather(lat,lng);
        });
    }
    
    getWeather(lat,lng){
        let appId = "a6eea097e136dee2b7a8185d5d87df4f";
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${appId}&units=metric`;
        fetch(url)
            .then((response) => {
                return response.json();
        })
            .then((json) => {
                console.log(json);

                let place = json.name;
                let description = json.weather[0].main

                console.log(place, description)
      });
        
    }
}

let app = new App();