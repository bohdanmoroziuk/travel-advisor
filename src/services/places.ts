import axios from 'axios';
import { nanoid } from 'nanoid';
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
      bl_latitude: sw?.lat ?? 0,
      tr_latitude: ne?.lat ?? 0,
      bl_longitude: sw?.lng ?? 0,
      tr_longitude: ne?.lng ?? 0,
    },
  });

  const places = response.data.data.map((item: any) => ({
    id: nanoid(),
    ...item,
  }));
  
  return places;
};