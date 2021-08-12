import { FC } from 'react';

import {
  Box,
  Button,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from '@material-ui/core';
import LocationIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from 'components/PlaceDetails/styles';
import { PlaceWithId, Award } from 'types';

interface PlaceDetailsProps {
  place: PlaceWithId;
}

const fallbackImageUrl = 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg';

const openUrl = (url: string) => {
  window.open(url, '_blank');
};

const PlaceDetails: FC<PlaceDetailsProps> = ({ place }) => {
  const classes = useStyles();

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }} 
        image={place?.photo?.images?.large?.url ?? fallbackImageUrl} 
        title={place.name} 
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Rating value={Number(place.rating)} readOnly />
          <Typography variant="subtitle1" gutterBottom>
            out of {place.num_reviews} reviews
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">
            Price
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {place.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">
            Ranking
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {place.ranking}
          </Typography>
        </Box>
        {place?.awards?.map((award: Award) => (
          <Box 
            display="flex" 
            justifyContent="space-between" 
            alignItems="center" 
            my={1}
            key={award.display_name}
          >
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant="subtitle2" color="textSecondary">
              {award.display_name}
            </Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <Chip
            className={classes.chip} 
            size="small" 
            label={name} 
            key={name}
          />
        ))}
        {place?.address && (
          <Typography
            className={classes.subtitle} 
            variant="subtitle2" 
            color="textSecondary" 
            gutterBottom
          >
            <LocationIcon /> {place.address}
          </Typography>
        )}
        {place?.phone && (
          <Typography
            className={classes.spacing} 
            variant="subtitle2" 
            color="textSecondary" 
            gutterBottom
          >
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => openUrl(place.web_url)}
          >
            Trip Advisor
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => openUrl(place.website)}
          >
            Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
