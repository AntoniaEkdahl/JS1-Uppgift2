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
    let weather = xhr.response.weather[0].description;
    let temp = Math.round(xhr.response.main.temp);
    let printWeatherToScreen = document.querySelector('#localWeather');
    printWeatherToScreen.innerHTML = temp +'C '+ weather;
  };
};

