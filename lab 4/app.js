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
                let description = json.weather[0].main;
                this.changeText(place, description);
                if(description === 'clouds'){
                    let id = '257'
                    this.getSport(id);
                } else {
                    let id = '134'
                    this.getSport(id);
                }
                
                
        });   
    }

    getSport(id) {
        let url = `https://sports.api.decathlon.com/sports/${id}`;
        fetch(url)
          .then((response) => {
            console.log(url);
            return response.json();
          })
          .then((json) => {
            console.log(json)
            let sport = json.data.attributes.name;
            let image = json.data.relationships.images.data[0].url;
            console.log(image)
            this.changeText2(sport, image);
          })

    }


    changeText(place, description) {
        document.querySelector("#text").innerHTML = `${description} in ${place} today`; 
    }

    changeText2(swimming, image) {
        document.querySelector("#text2").innerHTML = `Perfect weather to go ${swimming} today`;
        document.querySelector("#ad").style.backgroundImage = `url(${image})`;
    }
}

let app = new App();