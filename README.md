# Weather Web App

## Overview

This web application lets users check the current weather for a location. It uses AJAX to fetch data from a weather API and displays it in a user-friendly format.

## Requirements

1. **Homepage:**
   - Create a simple homepage with a search input field and a "Get Weather" button.

2. **Weather Display:**
   - Show the current weather conditions including temperature, humidity, wind speed, and weather description.

3. **Error Handling:**
   - Handle cases where the entered location is not found or there's an issue with the API request. Display a user-friendly error message.

4. **Unit Selection:**
   - Allow users to switch between temperature units (Celsius and Fahrenheit).

5. **Optional: Geolocation:**
   - Offer the option to use the user's geolocation to automatically fetch the weather for their current location.

6. **Styling:**
   - Apply basic CSS styles for layout, color, and readability.

7. **Responsive Design:**
   - Ensure the app works well on both desktop and mobile devices.

## Directory Structure

```
/weather-app/
    ├── index.html
    ├── style.css
    ├── script.js
    ├── README.md
```

## Usage

1. Open `index.html` in a web browser.
2. Enter a location and click "Get Weather" to retrieve the current weather data.
3. Optionally, click "Use My Location" for automatic weather updates.
4. Toggle between Celsius and Fahrenheit using the unit selection dropdown.

## Dependencies

- [OpenWeatherMap API](https://openweathermap.org/api) (API key required)


## Acknowledgements

- This project uses the OpenWeatherMap API for weather data.

## License

This project is licensed under the [MIT License](LICENSE).
