// Location.js
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create Location context
const Location = createContext();

// Provider component
export const LocationProvider = ({ children }) => {
    const [location, setLocation] = useState({ lat: null, long: null });
    const [error, setError] = useState(null);

    // Fetch location once when the component mounts
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

    return (
        <Location.Provider value={{ location, error }}>
            {children}
        </Location.Provider>
    );
};

// Custom hook to use Location context
export const useLocation = () => {
    return useContext(Location);
};
