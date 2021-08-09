import axios from 'axios';
import { Coords } from 'google-map-react';

const key = process.env.REACT_APP_RAPIDAPI_KEY;
const host = process.env.REACT_APP_RAPIDAPI_HOST;

const http = axios.create({
  baseURL: 'https://travel-advisor.p.rapidapi.com',
  headers: {
    'x-rapidapi-key': key,
    'x-rapidapi-host': host,
  },
});

export const getPlaces = async (ne: Coords, sw: Coords) => {
  const response = await http.get('/restaurants/list-in-boundary', {
    params: {
      bl_latitude: sw.lat,
      tr_latitude: ne.lat,
      bl_longitude: sw.lng,
      tr_longitude: ne.lng,
    },
  });
  
  return response.data.data;
};