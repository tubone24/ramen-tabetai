export const getYelpRestaurant = (
  yelpToken: string,
  latitude: string,
  longitude: string
): YelpRest[] => {
  const getRestaurantOptions: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
    method: 'get',
    contentType: 'application/json',
    muteHttpExceptions: true,
    headers: {
      Authorization: `Bearer ${yelpToken}`
    }
  };
  const resp = UrlFetchApp.fetch(
    `https://api.yelp.com/v3/businesses/search?term=ramen&latitude=${latitude}&longitude=${longitude}&sort_by=distance`,
    getRestaurantOptions
  );
  if (resp.getResponseCode() !== 200) {
    return [];
  }
  const json = resp.getContentText();
  console.log(json);
  return JSON.parse(json).businesses;
};

export interface YelpRest {
  image_url: string;
  is_closed: boolean;
  id: string;
  alias: string;
  rating: number;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  name: string;
  url: string;
  phone: string;
  location: {
    display_address: string[];
  };
}
