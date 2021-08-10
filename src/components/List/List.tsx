import { ChangeEvent, FC } from 'react';

import { 
  CircularProgress, 
  Grid, 
  Typography, 
  InputLabel, 
  MenuItem, 
  FormControl, 
  Select 
} from '@material-ui/core';

import PlaceDetails from 'components/PlaceDetails/PlaceDetails';

import useStyles from 'components/List/styles';

interface ListProps {
  places: any[];
  isLoading: boolean;
  type: string;
  rating: number;
  onTypeChange: (event: ChangeEvent<any>) => void;
  onRatingChange: (event: ChangeEvent<any>) => void;
}

const List: FC<ListProps> = ({ 
  places, 
  isLoading,
  type,
  rating,
  onTypeChange,
  onRatingChange
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Restaurants, Hotels and Attractions around you
      </Typography>

      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={onTypeChange}>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel>Rating</InputLabel>
            <Select value={rating} onChange={onRatingChange}>
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>Above 3.0</MenuItem>
              <MenuItem value={4}>Above 4.0</MenuItem>
              <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
          </FormControl>

          <Grid className={classes.list} container spacing={3}>
            {places?.map((place) => (
              <Grid item key={place.id} xs={12}>
                <PlaceDetails place={place} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default List;
