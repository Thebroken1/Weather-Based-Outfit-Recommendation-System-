import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config.json';
import { useLocation } from './Location.js';

function ConditionData() {
    const { location, error: locationError } = useLocation(); // Get location and error from context
    const [conditionData, setConditionData] = useState('');   // Weather condition description
    const [fetchError, setFetchError] = useState(null);       // Error specific to data fetch
    const API_KEY = config.openWeatherToken;

    // Fetch weather data when location updates
    useEffect(() => {
        if (location.lat && location.long) {
            fetchWeatherData(location.lat, location.long);
        }
    }, [location]);

    // Fetch weather data based on latitude and longitude
    const fetchWeatherData = async (lat, long) => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
            );
            setConditionData(response.data.weather[0].description); // Set weather condition
        } catch (error) {
            console.error("Error fetching weather data:", error);
            setFetchError("Failed to fetch weather data.");
        }
    };

    return (
        <div className="conditionData">
            {locationError ? (
                <p>{locationError}</p>
            ) : fetchError ? (
                <p>{fetchError}</p>
            ) : conditionData ? (
                <p>Condition: {conditionData}</p>
            ) : (
                <p>Loading weather condition...</p>
            )}
        </div>
    );
}

export default ConditionData;
