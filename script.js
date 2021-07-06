const body = document.querySelector('body');
const searchDiv = document.createElement('div');
const searchBar = document.createElement('input');
searchBar.setAttribute('id', 'searchBar');
const submitButton = document.createElement('button');
submitButton.setAttribute('id', 'submitButton');
submitButton.textContent = 'Get Weather';
submitButton.addEventListener('click', getWeather);
searchDiv.appendChild(searchBar);
searchDiv.appendChild(submitButton);
body.appendChild(searchDiv);

async function getWeather() {
    let startTime = Date.now();
    const myAPIKey = 'f4915a6eecf1351d27b1c07c7746634a'
    let searchQuery = document.getElementById('searchBar').value;
    if (searchQuery === '') {
        searchQuery = 'mentor,ohio';
    }
    
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&APPID=${myAPIKey}`, {
        mode: 'cors'
    })
    const weatherData = await response.json();
    let endTime = Date.now();
    let duration = endTime - startTime;
    let degK = weatherData.main.temp;
    let degF = KelvinToFahrenheit(degK);
    console.log(degF);
    console.log(duration);
}

function KelvinToCelsius(degK) {
    degC = degK - 273.15;
    return degC;
}

function KelvinToFahrenheit(degK) {
    degF = (degK - 273.15) * (9/5) + 32;
    return degF;
}

