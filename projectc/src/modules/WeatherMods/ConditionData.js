import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config.json';
import { useLocation } from './Location.js';

export function useConditionData() {
    const [weatherData, setWeatherData] = useState({ code: null, description: null });
    const [fetchError, setFetchError] = useState(null);
    const { location, error: locationError } = useLocation(); // Get location and error from context
    const API_KEY = config.openWeatherToken;

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
            const code = response.data.weather[0].id;
            const description = response.data.weather[0].description;
            setWeatherData({ code, description });
        } catch (error) {
            console.error("Error fetching weather data:", error);
            setFetchError("Failed to fetch weather data.");
        }
    };

    return { weatherData, fetchError, locationError };
}
