let printWeatherToScreen = document.querySelector('#localWeather');


let url = "http://api.openweathermap.org/geo/1.0/direct?q=Malmö,SE&limit=5&appid=e190806c15ff3407da1698ecb5b6cd98";
let xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
xhr.responseType = "json";
xhr.send();

xhr.onload = function getLatitudeLongitude() {
  let latitude = xhr.response[0].lat;
  let longitude = xhr.response[0].lon;
  xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid=b688935d67e7556e5e058c9d5679aaee&units=metric", true);
  xhr.send();
      xhr.onload = function getWeatherWithLatitudeLongitude() {
        let weather = xhr.response.weather[0].main;
        let temp = Math.round(xhr.response.main.temp);
        printWeatherToScreen.innerHTML = temp +'C';
            if (weather == 'Clouds') {
              printWeatherToScreen.innerHTML += `<img src="img/moln.png" alt="Clouds" id="weatherIcon"></img>`;
            } 
            if (weather == 'Rain'){
              printWeatherToScreen.innerHTML += `<img src="img/regn.png" alt="Rain" id="weatherIcon"></img>`;
            } 
            if (weather == 'Snow'){
              printWeatherToScreen.innerHTML += `<img src="img/snö.png" alt="Snow" id="weatherIcon"></img>`;
            }
            if (weather == 'Clear'){
              printWeatherToScreen.innerHTML += `<img src="img/sol.png" alt="Sun" id="weatherIcon"></img>`;
            };
        };
};


