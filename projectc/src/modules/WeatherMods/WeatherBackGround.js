import '../../App.css';
import WeatherModule from './WeatherModule';
import IconWeather from './IconWeather';
import Temperature from './Temperature';

function WeatherBackGround() {
    return(
        <div className = "weatherBackGround">
            <div className = "box"><WeatherModule/></div>
            <div className = "box"><IconWeather /></div>
            <div className = "box"><Temperature /></div>
        </div>
    );
}

export default WeatherBackGround;