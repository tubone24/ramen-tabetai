export const getHotpepperRestaurant = (
  hotpepperToken: string,
  latitude: string,
  longitude: string
): HotpepperRest[] => {
  const getRestaurantOptions: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
    method: 'get',
    contentType: 'application/json',
    muteHttpExceptions: true
  };
  const resp = UrlFetchApp.fetch(
    `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${hotpepperToken}&lat=${latitude}&lng=${longitude}&range=2&order=4&format=json&genre=G013`,
    getRestaurantOptions
  );
  if (resp.getResponseCode() !== 200) {
    return [];
  }
  const json = resp.getContentText();
  console.log(json);
  return JSON.parse(json).results.shop;
};

export interface HotpepperRest {
  access: string;
  address: string;
  name: string;
  id: string;
  lat: number;
  lng: number;
  photo: {
    mobile: {
      l: string;
      s: string;
    };
    pc: {
      l: string;
      m: string;
      s: string;
    };
  };
  urls: {
    pc: string;
  };
  catch: string;
}
