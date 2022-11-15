/*
let localWeatherTag = document.querySelector('#localWeather');


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
        localWeatherTag.innerHTML = temp +'C';
            if (weather == 'Clouds') {
              localWeatherTag.innerHTML += `<img src="img/moln.png" alt="Clouds" id="weatherIcon"></img>`;
            } 
            if (weather == 'Rain'){
              localWeatherTag.innerHTML += `<img src="img/regn.png" alt="Rain" id="weatherIcon"></img>`;
            } 
            if (weather == 'Snow'){
              localWeatherTag.innerHTML += `<img src="img/snö.png" alt="Snow" id="weatherIcon"></img>`;
            }
            if (weather == 'Clear'){
              localWeatherTag.innerHTML += `<img src="img/sol.png" alt="Sun" id="weatherIcon"></img>`;
            };
        };
};

*/

function getData(URL, callback){
  xhr = new XMLHttpRequest();
  xhr.open('GET', URL);
  xhr.onload = callback;
  xhr.send();
}

getData('http://api.openweathermap.org/geo/1.0/direct?q=Malmö,SE&limit=5&appid=e190806c15ff3407da1698ecb5b6cd98', getLatitudeLongitude);


function getLatitudeLongitude(){
  let parsedBody = JSON.parse(this.response);
  let latitude = parsedBody[0].lat;
  let longitude = parsedBody[0].lon;
  getData("https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid=b688935d67e7556e5e058c9d5679aaee&units=metric", getTempWeather);
};

function getTempWeather(){
  let parsedBody = JSON.parse(this.response);
  let weather = parsedBody.weather[0].main;
  let temp = Math.round(parsedBody.main.temp);
  printToScreen(temp,weather);
}


function printToScreen(temp,weather){
let localWeatherTag = document.querySelector('#localWeather');
localWeatherTag.innerHTML = temp +'C';
if (weather == 'Clouds') {
  localWeatherTag.innerHTML += `<img src="img/moln.png" alt="Clouds" id="weatherIcon"></img>`;
} 
if (weather == 'Rain'){
  localWeatherTag.innerHTML += `<img src="img/regn.png" alt="Rain" id="weatherIcon"></img>`;
} 
if (weather == 'Snow'){
  localWeatherTag.innerHTML += `<img src="img/snö.png" alt="Snow" id="weatherIcon"></img>`;
}
if (weather == 'Clear'){
  localWeatherTag.innerHTML += `<img src="img/sol.png" alt="Sun" id="weatherIcon"></img>`;
};
}


