import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudBolt, faCloudSun, faSun , faMoon} from '@fortawesome/free-solid-svg-icons'; // Import required icons
import React from 'react';
import Timer from './Timer'; // Assuming you have Timer function in the same directory
import ConditionData from './ConditionData'; // Assuming this is your data function

function IconWeather() {
    const currentTime = Timer();
    const conditionData = ConditionData();
    
    // Define the time comparisons as Date objects for better handling
    const timeCompAM = new Date('1970-01-01T06:00:00'); // 6:00 AM
    const timeCompPM = new Date('1970-01-01T18:00:00'); // 6:00 PM

    let displayIcon;

    // Assuming Timer() returns a time string in HH:MM:SS format, convert to Date for comparison
    const currentTimeObj = new Date('1970-01-01T' + currentTime);

    if (currentTimeObj > timeCompAM && currentTimeObj < timeCompPM) {
        // Daytime: 6 AM to 6 PM
        if (conditionData === "overcast clouds") {
            displayIcon = faCloudSun; // Icon for daytime with overcast clouds
        } else {
            displayIcon = faSun; // Default daytime icon
        }
    } else {
        // Nighttime: after 6 PM
        if (conditionData === "overcast clouds") {
            displayIcon = faCloudBolt; // Icon for nighttime with overcast clouds
        } else {
            displayIcon = faMoon; // Default nighttime icon (add this import if needed)
        }
    }

    return (
        <div className="iconWeather">
            <p>{currentTime} <FontAwesomeIcon icon={displayIcon} /></p>
        </div>
    );
}

export default IconWeather;
