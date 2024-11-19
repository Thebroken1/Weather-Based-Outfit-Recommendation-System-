import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudBolt, faCloudSun, faSun, faMoon, faCloudMoon } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Timer from './Timer'; 
import { useConditionData } from './ConditionData'; 
import weatherIconMap from './IconsWeatherMap';

function IconWeather() {
    const { weatherData, fetchError, locationError } = useConditionData(); // Use the custom hook
    const currentTime = Timer(); // Get the current time as a string like "14:30:00"

    if (locationError) return <p>Error: {locationError}</p>;
    if (fetchError) return <p>Error: {fetchError}</p>;
    if (!weatherData.code) return <p>Loading weather data...</p>;

    const weatherCode = weatherData.code;

    // Define daytime boundaries
    const timeCompAM = new Date('1970-01-01T06:00:00');
    const timeCompPM = new Date('1970-01-01T18:00:00');
    const currentTimeObj = new Date(`1970-01-01T${currentTime}`);

    // Check if it's daytime or nighttime
    const isDaytime = currentTimeObj >= timeCompAM && currentTimeObj < timeCompPM;
    const defaultIcon = isDaytime ? faSun : faMoon;

    // Determine display icon
    const adjustedWeatherCode = isDaytime ? weatherCode : weatherCode + 1000;
    const displayIcon = weatherIconMap[adjustedWeatherCode] || defaultIcon;

    return (
        <div className="iconWeather">
            <p>{currentTime} <FontAwesomeIcon icon={displayIcon} /></p>
            <p>Condition: {weatherData.description}</p>
        </div>
    );
}

export default IconWeather;
