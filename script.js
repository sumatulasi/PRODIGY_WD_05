const apiKey = 'c73e348b22f5c2df3a2063e9b7a0ad51'; // Replace with your OpenWeatherMap API key

async function getWeather() {
    const locationInput = document.getElementById('location-input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Update DOM with weather data
        document.getElementById('location').textContent = data.name;
        document.getElementById('temperature').textContent = `${data.main.temp}°C`;
        document.getElementById('description').textContent = data.weather[0].description;

    } catch (error) {
        console.log('Error fetching weather data: ', error);
        alert('Failed to fetch weather data. Please try again.');
    }
}
