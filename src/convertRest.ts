import { YelpRest } from './yelpService';
import { GrunaviRest } from './grunaviService';

export const convertRest = (yelpRests: YelpRest[]): GrunaviRest[] => {
  return yelpRests.map(yelpRest => ({
    id: yelpRest.id,
    image_url: {
      shop_image1: yelpRest.image_url
    },
    latitude: yelpRest.latitude,
    longitude: yelpRest.longitude,
    name: yelpRest.alias,
    url_mobile: yelpRest.url,
    url: yelpRest.url,
    tel: yelpRest.phone,
    address: '',
    pr: {
      pr_long: ''
    }
  }));
};
