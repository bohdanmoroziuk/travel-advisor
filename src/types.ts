export interface Award {
  display_name: string;
  images: {
    small: string;
  };
}

export interface Place {
  name: string;
  rating: string;
  photo: {
    images: {
      large?: {
        url?: string;
      };
    };
  };
  latitude: string;
  longitude: string;
  num_reviews: string;
  price_level: string;
  ranking: string;
  address?: string;
  phone?: string;
  web_url: string;
  website: string;
  cuisine?: Array<{
    name: string;
  }>;
  awards?: Array<Award>;
}

export interface PlaceWithId extends Place {
  id: string;
}

export interface Weather {
  list?: Array<{
    coord: {
      lat: number;
      lon: number;
    };
    weather: Array<{
      icon: string;
    }>;
  }>;
}