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
    }
}

let app = new App();