import { FC } from 'react';

import GoogleMap from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationIcon from '@material-ui/icons/LocationOnOutlined';
import { Rating } from '@material-ui/lab';

import useStyles from 'components/Map/styles';

const Map: FC = () => {
  const classes = useStyles();

  const isMobile = useMediaQuery('(min-width: 600px)');

  const coordinates = { lat: 0, lng: 0 };

  return (
    <div className={classes.mapContainer}>
      <GoogleMap
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY ?? '' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{}}
        onChange={() => {}}
        onChildClick={() => {}}
      >

      </GoogleMap>
    </div>
  );
};

export default Map;
