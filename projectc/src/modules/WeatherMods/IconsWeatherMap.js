import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudBolt, faCloudSun, faSun , faMoon,faCloudSunRain, faCloudMoonRain, faCloudMoon} from '@fortawesome/free-solid-svg-icons'; // Import required icons
import React from 'react';


const weatherIconMap = {
    200:    faCloudBolt, // Thunderstorm with light rain
    201:    faCloudBolt, // Thunderstorm with rain
    202:    faCloudBolt, // Thunderstorm with heavy rain
    500:    faCloudSunRain, // Light rain
    501:    faCloudSunRain, // Moderate rain
    800:    faSun,       // Clear sky
    801:    faCloudSun,  // Few clouds
    802:    faCloudSun,  // Scattered clouds
    803:    faCloudSun,  // Broken clouds
    804:    faCloudSun,  // Overcast clouds
    1200:   faCloudBolt,
    1201:   faCloudBolt,
    1202:   faCloudBolt,
    1500:   faCloudMoonRain,
    1501:   faCloudMoonRain,
    1800:   faMoon,
    1801:   faCloudMoon,
    1802:   faCloudMoon,
    1803:   faCloudMoon,
    1804:   faCloudMoon
}

export default  weatherIconMap;