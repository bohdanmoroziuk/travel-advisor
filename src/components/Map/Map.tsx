import { FC } from 'react';

import GoogleMap, { ChangeEventValue } from 'google-map-react';

import PlaceMarker from 'components/PlaceMarker/PlaceMarker';
import useStyles from 'components/Map/styles';

interface MapProps {
  onChange: (event: ChangeEventValue) => void;
  coordinates: any;
  places: any[];
}

const Map: FC<MapProps> = ({
  onChange,
  coordinates,
  places,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.mapContainer}>
      <GoogleMap
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY ?? '' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{}}
        onChange={onChange}
        onChildClick={() => {}}
      >
        {places?.map((place) => (
          <PlaceMarker
            place={place}
            lat={place.latitude}
            lng={place.longitude}
            key={place.id}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default Map;
