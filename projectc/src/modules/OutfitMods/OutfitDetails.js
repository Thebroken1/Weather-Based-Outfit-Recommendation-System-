import React, { useState, useEffect } from 'react';
import { useConditionData } from '../WeatherMods/ConditionData'; // Import your condition data hook
import { useTemperature } from '../WeatherMods/TemperatureHook'; // Import your temperature hook
import axios from 'axios';

function OutfitDetails() {
    const { weatherData, fetchError: conditionError } = useConditionData(); // Get weather code and error from hook
    const { temperatureData: temperature, error: temperatureError } = useTemperature(); // Get temperature and error from hook
    const [outfits, setOutfits] = useState([]); // State for outfit recommendations
    const [loading, setLoading] = useState(true); // State for loading
    const [error, setError] = useState(null); // State for errors

    // Debugging logs to check if data is being fetched
    console.log('Weather Data:', weatherData);
    console.log('Temperature:', temperature);

    // Fetch outfits when weatherData and temperature change
    useEffect(() => {
        if (weatherData && temperature !== null) {
            async function fetchOutfits() {
                setLoading(true);
                setError(null);
    
                try {
                    const weatherCode = weatherData.code || weatherData; // Check if the weatherData object has 'code'
                    const temp = temperature;
    
                    // Validate the weather code and temperature before sending the request
                    if (!weatherCode || temp === null) {
                        throw new Error("Invalid weather or temperature data.");
                    }
    
                    // Ensure the parameters are properly set before making the request
                    console.log("Sending request with weatherCode:", weatherCode, "and temperature:", temp);
    
                    // Make the GET request
                    const response = await axios.get('http://localhost/Outfits.php', {
                        params: { 
                            weather_code: weatherCode,
                            temperature: temp
                        }
                    });
                    console.log('Request URL:', `http://localhost/Outfits.php?weather_code=${weatherCode}&temperature=${temp}`);
                    console.log('Outfits fetched:', response.data);
                    setOutfits(response.data);
                } catch (err) {
                    console.error("Failed to load outfit recommendations:", err);
                    setError("Failed to load outfit recommendations.");
                } finally {
                    setLoading(false);
                }
            }
    
            fetchOutfits();
        } else {
            setError("Invalid weather or temperature data.");
            setLoading(false);
        }
    }, [weatherData, temperature]);
    // Dependency array ensures effect is run when weatherData or temperature changes
    

    // Handle loading state
    if (loading) {
        return <p>Loading outfits...</p>;
    }

    // Handle error states for condition and temperature fetching
    if (conditionError || temperatureError || error) {
        return <p>{conditionError || temperatureError || error}</p>;
    }

    // Handle case when no outfits are available
    if (outfits.length === 0) {
        return <p>No outfits available for the current conditions.</p>;
    }

    // Render the fetched outfits
    return (
        <div className="outfitDetails">
            <h2>Recommended Outfits</h2>
            <p>Current Temperature: {temperature}°C</p>
            <div className="outfitList">
                {outfits.map((outfit, index) => (
                    <div key={index} className="outfitItem">
                        <p>{outfit.outfit}</p>
                        <p>Rating: {outfit.rating}</p>
                        {outfit.image_url && (
                            <img src={outfit.image_url} alt={outfit.outfit} className="outfitImage" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OutfitDetails;
