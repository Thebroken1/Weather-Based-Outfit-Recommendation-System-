import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudBolt, faCloudSun, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'; 
import React from 'react';
import Timer from './Timer'; // Assuming Timer returns a time string
import ConditionData from './ConditionData'; // Assuming ConditionData returns an object with weather data
import weatherIconMap from './IconsWeatherMap';

function IconWeather() {
    const currentTime = Timer(); // Using Timer to get time as a string like "14:30:00"
    const conditionData = ConditionData(); // Using ConditionData to get weather data with `code`
    const weatherCode = conditionData?.code || 800; // Default to 800 (clear sky) if undefined

    // Define daytime boundaries as Date objects
    const timeCompAM = new Date('1970-01-01T06:00:00');
    const timeCompPM = new Date('1970-01-01T18:00:00');
    const currentTimeObj = new Date(`1970-01-01T${currentTime}`);

    // Check if it's daytime or nighttime
    const isDaytime = currentTimeObj >= timeCompAM && currentTimeObj < timeCompPM;
    const defaultIcon = isDaytime ? faSun : faMoon;

    // Determine display icon based on time and weather code
    const adjustedWeatherCode = isDaytime ? weatherCode : weatherCode + 1000;
    console.log("Adjusted Weather Code:", adjustedWeatherCode); // Debugging log
    const displayIcon = weatherIconMap[adjustedWeatherCode] || defaultIcon;

    return (
        <div className="iconWeather">
            <p>{currentTime} <FontAwesomeIcon icon={displayIcon} /></p>
        </div>
    );
}

export default IconWeather;
