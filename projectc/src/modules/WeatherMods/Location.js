import React, { createContext, useContext, useState, useEffect } from 'react';

// Create Location Context
const LocationContext = createContext();

// LocationProvider component
export const LocationProvider = ({ children }) => {
    const [location, setLocation] = useState({ lat: null, long: null });
    const [error, setError] = useState(null);

    useEffect(() => {
        // Attempt to fetch location on mount
        const fetchLocation = () => {
            if (!navigator.geolocation) {
                setError("Geolocation is not supported by your browser.");
                return;
            }

            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        lat: position.coords.latitude,
                        long: position.coords.longitude,
                    });
                },
                (err) => {
                    console.error("Geolocation error:", err);
                    setError(getGeolocationErrorMessage(err));
                }
            );
        };

        fetchLocation();
    }, []);

    return (
        <LocationContext.Provider value={{ location, error }}>
            {children}
        </LocationContext.Provider>
    );
};

// Custom Hook: useLocation
export const useLocation = () => {
    const context = useContext(LocationContext);
    if (!context) {
        throw new Error("useLocation must be used within a LocationProvider");
    }
    return context;
};

// Utility: Map Geolocation API error codes to human-readable messages
const getGeolocationErrorMessage = (err) => {
    switch (err.code) {
        case err.PERMISSION_DENIED:
            return "User denied the request for Geolocation.";
        case err.POSITION_UNAVAILABLE:
            return "Location information is unavailable.";
        case err.TIMEOUT:
            return "The request to get user location timed out.";
        default:
            return "An unknown error occurred.";
    }
};
