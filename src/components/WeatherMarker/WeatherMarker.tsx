import { FC } from 'react';

interface WeatherMarkerProps {
  lat: number;
  lng: number;
  icon: string;
}

const WeatherMarker: FC<WeatherMarkerProps> = ({ icon }) => (
  <div>
    <img 
      src={`http://openweathermap.org/img/w/${icon}.png`} 
      alt="" 
      height={70}  
    />
  </div>
);

export default WeatherMarker;
