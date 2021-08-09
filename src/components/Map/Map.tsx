import { FC, Dispatch, SetStateAction } from 'react';

import GoogleMap, { ChangeEventValue } from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationIcon from '@material-ui/icons/LocationOnOutlined';
import { Rating } from '@material-ui/lab';

import useStyles from 'components/Map/styles';

interface MapProps {
  onChange: (event: ChangeEventValue) => void;
  coordinates: any;
}

const Map: FC<MapProps> = ({
  onChange,
  coordinates
}) => {
  const classes = useStyles();

  const isMobile = useMediaQuery('(min-width:600px)');

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

      </GoogleMap>
    </div>
  );
};

export default Map;
