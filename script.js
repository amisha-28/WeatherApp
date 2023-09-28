const API_KEY = '15537e92b66786c86216035cb963030e';

function getWeatherData() {
    const location = document.getElementById('location').value;
    const unit = document.getElementById('unit-toggle').value;

    if (location.trim() === '') {
        showError('Please enter a location.');
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&appid=${API_KEY}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            showWeatherData(data);
            clearError();
        })
        .catch(error => {
            showError(error.message);
            clearWeatherData();
        });
}

function showWeatherData(data) {
    const weatherCard = document.getElementById('weather-card');
    weatherCard.innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp} &deg;${getUnit()}</p>
        <p>Humidity: ${data.main.humidity} %</p>
        <p>Weather: ${data.weather[0].description}</p>
    `;
}

function showError(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
}

function clearError() {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = '';
}

function clearWeatherData() {
    const weatherCard = document.getElementById('weather-card');
    weatherCard.innerHTML = '';
}

function getUnit() {
    const unitToggle = document.getElementById('unit-toggle');
    return unitToggle.value === 'metric' ? 'C' : 'F';
}

function getGeoLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success => {
            const { latitude, longitude } = success.coords;
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${getUnit()}&appid=${API_KEY}`)
                .then(response => response.json())
                .then(data => showWeatherData(data));
        }, error => {
            showError('Geolocation error: ' + error.message);
        });
    } else {
        showError('Geolocation is not supported by this browser.');
    }
}
