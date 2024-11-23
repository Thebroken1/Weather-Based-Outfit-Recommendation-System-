import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config.json';

export function useTemperature() {
    const [temperatureData, setTemperatureData] = useState(null);
    const [location, setLocation] = useState({ lat: null, long: null });
    const [error, setError] = useState(null);

    const API_KEY = config.openWeatherToken;

    // Geolocation only runs once
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

    // Fetch weather data when location is updated
    useEffect(() => {
        if (location.lat && location.long) {
            fetchTemperatureData(location.lat, location.long);
        }
    }, [location]);

    const fetchTemperatureData = async (lat, long) => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
            );
            setTemperatureData(response.data.main.temp);
        } catch (error) {
            console.error("Error fetching temperature data:", error);
            setError("Failed to fetch temperature data.");
        }
    };

    return { temperatureData, error };
}
