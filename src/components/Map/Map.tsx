import { FC } from 'react';

import GoogleMap, { ChangeEventValue } from 'google-map-react';

import WeatherMarker from 'components/WeatherMarker/WeatherMarker';
import PlaceMarker from 'components/PlaceMarker/PlaceMarker';
import useStyles from 'components/Map/styles';
import theme from 'components/Map/theme';

import config from 'config';
import { PlaceWithId, Weather } from 'types';

interface MapProps {
  onChange: (event: ChangeEventValue) => void;
  coordinates: any;
  places: PlaceWithId[];
  weather: Weather;
}

const Map: FC<MapProps> = ({
  onChange,
  coordinates,
  places,
  weather,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.mapContainer}>
      <GoogleMap
        bootstrapURLKeys={{ key: config.googleMapApiKey ?? '' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: theme,
        }}
        onChange={onChange}
        onChildClick={() => {}}
      >
        {places?.map((place) => (
          <PlaceMarker
            place={place}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={place.id}
          />
        ))}
        {weather?.list?.map((data: any, index: number) => (
          <WeatherMarker
            key={index}
            lat={data.coord.lat}
            lng={data.coord.lon}
            icon={data.weather[0].icon}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default Map;
