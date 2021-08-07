import { ChangeEvent, FC, useState } from 'react';

import { 
  CircularProgress, 
  Grid, 
  Typography, 
  InputLabel, 
  MenuItem, 
  FormControl, 
  Select 
} from '@material-ui/core';

import useStyles from 'components/List/styles';

const List: FC = () => {
  const classes = useStyles();

  const [type, setType] = useState('restaurants');

  const [rating, setRating] = useState(0);

  const places = [{ id: 1,  name: 'Cool place' }];

  const handleTypeChange = (event: ChangeEvent<any>) => {
    setType(event.target.value);
  };

  const handleRatingChange = (event: ChangeEvent<any>) => {
    setRating(event.target.value);
  };

  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Restaurants, Hotels and Attractions around you
      </Typography>

      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={handleTypeChange}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={handleRatingChange}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>

      <Grid className={classes.list} container spacing={3}>
        {places?.map((place) => (
          <Grid item key={place.id} xs={12}>
            {place.name}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;