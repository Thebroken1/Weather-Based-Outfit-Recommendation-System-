import '../../App.css';
import React, { useState, useEffect } from 'react';
import ConditionData from './ConditionData';
import HumidityData from './HumidityData';
import { useLocation } from './Location';

function WeatherModule() {
    const { error: locationError } = useLocation(); // Get location and error from context
    const conditionData = ConditionData();  // Assuming these return actual data
    const humidityData = HumidityData();

    return (
        <div className="weatherMod">
            {locationError ? ( // Use locationError instead of error
                <p>{locationError}</p>
            ) : humidityData !== null && conditionData ? (
                <>
                    <p>{humidityData}</p>
                    <p>{conditionData}</p>
                </>
            ) : (
                <p>Loading weather data...</p>
            )}
        </div>
    );
}

export default WeatherModule;
