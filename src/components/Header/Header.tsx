import { FC, useState } from 'react';

import { Coords } from 'google-map-react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from 'components/Header/styles';

interface AutocompleteInstance {
  getPlace: () => {
    geometry: {
      location: {
        lat: () => number;
        lng: () => number;
      };
    };
  };
}

interface HeaderProps {
  setCoordinates: (coords: Coords) => void;
}

const Header: FC<HeaderProps> = ({ setCoordinates }) => {
  const classes = useStyles();

  const [autocomplete, setAutocomplete] = useState<AutocompleteInstance | null>(null);

  const handleLoad = (autocomplete: any) => {
    setAutocomplete(autocomplete);
  };

  const handlePlaceChange = () => {
    if (autocomplete) {
      const lat = autocomplete.getPlace().geometry.location.lat();
      const lng = autocomplete.getPlace().geometry.location.lng();

      setCoordinates({ lat, lng });
    }
  };

  return (
    <AppBar position="static" >
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.title} variant="h5">
          Travel Advisor
        </Typography>
        <Box display="flex">
          <Typography className={classes.title} variant="h6">
            Explore new places
          </Typography>
          <Autocomplete
            onLoad={handleLoad}
            onPlaceChanged={handlePlaceChange}
          >
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                classes={{ root: classes.inputRoot, input: classes.input }}
                placeholder="Search..."
              />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
