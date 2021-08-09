import { FC, useState, useEffect } from 'react';

import { CssBaseline, Grid } from '@material-ui/core';
import { ChangeEventValue, Coords, Bounds } from 'google-map-react';

import Map from 'components/Map/Map';
import List from 'components/List/List';
import Header from 'components/Header/Header';

import { getPlaces } from 'services/places';

const App: FC = () => {
  const [places, setPlaces] = useState([]);
  const [bounds, setBounds] = useState<Bounds>({} as Bounds);
  const [coordinates, setCoordinates] = useState<Coords>({} as Coords);

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
    getPlaces(bounds.ne, bounds.sw)
      .then(setPlaces)
  }, [coordinates, bounds]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List places={places} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            onChange={handleMapChange}
            coordinates={coordinates}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
