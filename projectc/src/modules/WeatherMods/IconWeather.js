import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudBolt, faCloudSun, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'; // Import required icons
import React from 'react';
import Timer from './Timer'; // Assuming you have Timer function in the same directory
import ConditionData from './ConditionData'; // Assuming this is your data function
import weatherIconMap from './IconsWeatherMap';

function IconWeather() {
    const currentTime = Timer();
    const conditionData = ConditionData();
    const weatherCode = conditionData?.code; // Assuming conditionData contains a code attribute
    
    // Define the time comparisons as Date objects for better handling
    const timeCompAM = new Date('1970-01-01T06:00:00'); // 6:00 AM
    const timeCompPM = new Date('1970-01-01T18:00:00'); // 6:00 PM

    // Convert current time to Date object
    const currentTimeObj = new Date('1970-01-01T' + currentTime);

    // Determine the default icon based on time of day
    const isDaytime = currentTimeObj >= timeCompAM && currentTimeObj < timeCompPM;
    const defaultIcon = isDaytime ? faSun : faMoon;

    // Retrieve the icon from map or fallback to default
    const displayIcon = weatherIconMap[weatherCode] || (isDaytime ? faCloudSun : faCloudBolt);

    return (
        <div className="iconWeather">
            <p>{currentTime} <FontAwesomeIcon icon={displayIcon || defaultIcon} /></p>
        </div>
    );
}

export default IconWeather;
