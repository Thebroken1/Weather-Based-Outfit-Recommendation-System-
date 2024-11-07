import '../../App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config.json';

function WeatherModule() {
    const [humidityData, setHumidityData] = useState(null);       // Humidity
    const [conditionData, setConditionData] = useState('');       // Weather condition description
    const [location, setLocation] = useState({ lat: null, long: null });
    const [error, setError] = useState(null);
    const API_KEY = config.openWeatherToken; // Ensure the API key is in config.json

    // Get user's location once when the component mounts
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation({
                    lat: position.coords.latitude,
                    long: position.coords.longitude,
                });
            },
            (err) => {
                console.error("Geolocation error:", err);
                setError("Unable to retrieve location.");
            }
        );
    }, []);

    // Fetch weather data when location changes
    useEffect(() => {
        if (location.lat && location.long) {
            fetchWeatherData(location.lat, location.long);
        }
    }, [location]);

    const fetchWeatherData = async (lat, long) => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
            );
            const data = response.data.main;
            setHumidityData(data.humidity);                         // Set humidity
            setConditionData(response.data.weather[0].description); // Set weather condition
        } catch (error) {
            console.error("Error fetching weather data:", error);
            setError("Failed to fetch weather data.");
        }
    };

    return (
        <div className="weatherMod">
            {error ? (
                <p>{error}</p>
            ) : humidityData !== null && conditionData ? (
                <>
                    <p>Humidity: {humidityData}%</p>
                    <p>Condition: {conditionData}</p>
                </>
            ) : (
                <p>Loading weather data...</p>
            )}
        </div>
    );
}

export default WeatherModule;
