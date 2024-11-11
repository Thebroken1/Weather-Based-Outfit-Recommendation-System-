import '../../App.css';
import React, { useState, useEffect } from 'react';

function Timer(){

    const [currentTime,setCurrentTime] = useState(new Date());

    useEffect(()=> {
        const timer = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000);
        return ()=> clearInterval(timer);
    }, [])
    const formatedCurrentTime = currentTime.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,  // Set to false for 24-hour format
      });
    return formatedCurrentTime;
}
export default Timer;