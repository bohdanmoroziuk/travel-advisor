import { FC, useState, useEffect, ChangeEvent } from 'react';

import { CssBaseline, Grid } from '@material-ui/core';
import { ChangeEventValue, Coords, Bounds } from 'google-map-react';

import Map from 'components/Map/Map';
import List from 'components/List/List';
import Header from 'components/Header/Header';

import { getPlaces } from 'services/places';

const App: FC = () => {
  const [places, setPlaces] = useState<any>([]);
  const [filteredPlaces, setFilteredPlaces] = useState<any>([]);
  const [bounds, setBounds] = useState<Bounds>({} as Bounds);
  const [coordinates, setCoordinates] = useState<Coords>({} as Coords);
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState(0);

  console.log(rating);

  const handleTypeChange = (event: ChangeEvent<any>) => {
    setType(event.target.value);
  };

  const handleRatingChange = (event: ChangeEvent<any>) => {
    setRating(event.target.value);
  };

  const handleMapChange = (event: ChangeEventValue) => {
    setCoordinates(event.center);
    setBounds(event.marginBounds);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setCoordinates({
        lat: coords.latitude,
        lng: coords.longitude,
      });
    });
  }, []);

  useEffect(() => {
    console.log('rating change', rating);

    const newFilteredPlaces = places.filter((place: any) => (
      parseFloat(place.rating) > rating
    ));

    setFilteredPlaces(newFilteredPlaces);
  }, [rating, places]);

  useEffect(() => {
    setIsLoading(true);

    getPlaces(type, bounds.ne, bounds.sw)
      .then(setPlaces)
      .catch(console.log)
      .finally(() => {
        setIsLoading(false);
        setFilteredPlaces([]);
      });
  }, [coordinates, bounds, type]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            isLoading={isLoading}
            type={type}
            rating={rating}
            onTypeChange={handleTypeChange} 
            onRatingChange={handleRatingChange} 
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            onChange={handleMapChange}
            coordinates={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
