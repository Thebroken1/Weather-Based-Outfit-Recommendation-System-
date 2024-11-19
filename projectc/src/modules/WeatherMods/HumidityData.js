import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config.json';
import { useLocation } from './Location.js';

export function useHumidityData() {
    const { location, error: locationError } = useLocation(); // Get location and location error
    const [humidityData, setHumidityData] = useState(null);   // State for humidity data
    const [fetchError, setFetchError] = useState(null);       // State for fetch error
    const API_KEY = config.openWeatherToken;

    useEffect(() => {
        if (location.lat && location.long) {
            fetchHumidityData(location.lat, location.long);
        }
    }, [location]);

    // Fetch humidity data
    const fetchHumidityData = async (lat, long) => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
            );
            setHumidityData(response.data.main.humidity); // Set humidity value
        } catch (error) {
            console.error("Error fetching weather data:", error);
            setFetchError("Failed to fetch humidity data.");
        }
    };

    return { humidityData, fetchError, locationError };
}
