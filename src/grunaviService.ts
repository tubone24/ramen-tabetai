export const getRestaurant = (
  grunaviToken: string,
  latitude: string,
  longitude: string
): Rest[] => {
  const getRestaurantOptions: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
    method: 'get',
    contentType: 'application/json',
    muteHttpExceptions: true,
  };
  const resp = UrlFetchApp.fetch(
    `https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=${grunaviToken}&latitude=${latitude}&longitude=${longitude}&hit_per_page=100&category_s=RSFST08008,RSFST08009,RSFST08012,RSFST08013`,
    getRestaurantOptions
  );
  if (resp.getResponseCode() !== 200) {
    return [];
  }
  const json = resp.getContentText();
  console.log(json);
  return JSON.parse(json).rest;
};

export interface Rest {
  image_url: {
    shop_image1: string;
  };
  name: string;
  url_mobile: string;
  url: string;
  tel: string;
  address: string;
  pr: {
    pr_long: string;
  };
}
