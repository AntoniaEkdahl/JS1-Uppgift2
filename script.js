// oklart om det är till någon nytta att jag skapat en egen funktion för det. Gjorde mest för att vara tydlig med namn. 
function getData(){
  getLatitudeLongitud();
}

//Gör en request för att hämta latidue och longitud från ett API.
async function getLatitudeLongitud(){
let response = await fetch('http://api.openweathermap.org/geo/1.0/direct?q=Malmö,SE&limit=5&appid=e190806c15ff3407da1698ecb5b6cd98');
let parsedBody = await response.json();
  if(response.ok){
  let latitude = parsedBody[0].lat;
  let longitude = parsedBody[0].lon;
//Använder sedan den datan och stoppar in i URL för att använda som argument i min funktion för att hämta väder och temperatur. 
  getTempWeather("https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid=b688935d67e7556e5e058c9d5679aaee&units=metric");
}
}

//Har skapat en function för väder som tar en parameter och får ut temperatur samt väder. 
async function getTempWeather(url){
  response = await fetch(url);
  let parsedBody = await response.json();
  if(response.ok){
  let weather = parsedBody.weather[0].main;
  let temp = Math.round(parsedBody.main.temp);
// Använder sedan datan jag fick ut som argument i min funktion som skriver ut det på skärmen.
  printToScreen(temp,weather);
  }
}

//Min funktion för att skriva ut på skärmen. 
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

// Anropar funktionen. 
getData();
