import axios from 'axios';

import config from 'config';

const http = axios.create({
  baseURL: 'https://community-open-weather-map.p.rapidapi.com',
  headers: {
    'x-rapidapi-key': config.openWeatherMapApiKey,
    'x-rapidapi-host': config.openWeatherMapApiHost
  }
});

export const getWeather = async (lat: number, lon: number) => {
  const response = await http.get('/find', {
    params: {
      lat,
      lon,
    },
  });

  return response.data;
};
