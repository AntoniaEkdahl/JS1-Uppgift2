function getData(){
  fetchLatitudeLongitud();
}

async function fetchLatitudeLongitud(){
let response = await fetch('http://api.openweathermap.org/geo/1.0/direct?q=Malmö,SE&limit=5&appid=e190806c15ff3407da1698ecb5b6cd98');
let parsedBody = await response.json();
  if(response.ok){
  let latitude = parsedBody[0].lat;
  let longitude = parsedBody[0].lon;
  fetchTempWeather("https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid=b688935d67e7556e5e058c9d5679aaee&units=metric");
}
}

async function fetchTempWeather(url){
  response = await fetch(url);
  let parsedBody = await response.json();
  if(response.ok){
  let weather = parsedBody.weather[0].main;
  let temp = Math.round(parsedBody.main.temp);
  printToScreen(temp,weather);
  }
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

getData();
