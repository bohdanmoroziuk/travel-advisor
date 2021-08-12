import { FC } from 'react';

import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationIcon from '@material-ui/icons/LocationOnOutlined';
import { Rating } from '@material-ui/lab';

import useStyles from 'components/PlaceMarker/styles';

interface PlaceMarkerProps {
  place: any;
  lat: number;
  lng: number;
};

const fallbackImageUrl = 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg';

const PlaceMarker: FC<PlaceMarkerProps> = ({ place }) => {
  const isDesktop = useMediaQuery('(min-width:600px)');

  const classes = useStyles();

  return (
    <div 
      className={classes.markerContainer}
    >
      {isDesktop ? (
        <Paper
          className={classes.paper}
          elevation={3}
        >
          <Typography
            variant="subtitle2"
            gutterBottom
          >
            {place.name}
          </Typography>
          <img
            className={classes.pointer}
            src={place?.photo?.images?.large?.url ?? fallbackImageUrl}
            alt={place.name}
          />
          <Rating 
            size="small"
            value={Number(place.rating)}
            readOnly
          />
        </Paper>
      ) : (
        <LocationIcon
          color="primary"
          fontSize="large"
        />
      )}
    </div>
  );
};

export default PlaceMarker;
