import '../../App.css';
import React from 'react';
import { useConditionData } from './ConditionData'; // Ensure this is a hook
import { useHumidityData } from './HumidityData'; // Refactor HumidityData to a hook
import { useLocation } from './Location'; // Location context

function WeatherModule() {
    const { locationError } = useLocation(); // Get location-specific error
    const { weatherData, fetchError: weatherError } = useConditionData(); // Weather data and errors
    const { humidityData, fetchError: humidityError } = useHumidityData(); // Humidity data and errors

    if (locationError) {
        return <p>Error: {locationError}</p>; // Show location error if present
    }

    if (weatherError || humidityError) {
        return (
            <p>
                Error: {weatherError || humidityError}
            </p>
        ); // Show specific data fetch error
    }

    if (!weatherData || !humidityData) {
        return <p>Loading weather data...</p>; // Show loading state if data is missing
    }

    return (
        <div className="weatherMod">
            <p>Humidity: {humidityData}%</p>
            <p>Condition: {weatherData.description}</p>
        </div>
    );
}

export default WeatherModule;
