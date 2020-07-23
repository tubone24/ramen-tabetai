declare var global: any;

global.doPost = (e: any) => {

  const params = JSON.parse(e.postData.getDataAsString());
  console.log(JSON.stringify(params));
  const events = params.events;
  const type = events[0].type;
  const replyToken = events[0].replyToken;

  if (type !== 'message') {
    return ContentService.createTextOutput(JSON.stringify({ status: 'not location' })).setMimeType(
      ContentService.MimeType.JSON
    );
  }
  const message = events[0].message;
  if (message.type !== 'location') {
    return ContentService.createTextOutput(JSON.stringify({ status: 'not location' })).setMimeType(
      ContentService.MimeType.JSON
    );
  }
  const latitude = message.latitude;
  const longitude = message.longitude;
  const rest = getRestaurant(grunaviToken, latitude, longitude).rest;
  const imageCarousel = createImageCarousel(rest);
  sendLineReply(LINE_BEARER, replyToken, imageCarousel);
};

const sendLineReply = (lineBearer, replyToken, imageCarousel) => {
  const respData = {
    replyToken: replyToken,
    messages: [imageCarousel]
  };
  console.log(JSON.stringify(respData));
  const userRespOptions: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
    method: 'post',
    contentType: 'application/json',
    headers: {
      Authorization: 'Bearer ' + lineBearer
    },
    payload: JSON.stringify(respData)
  };

  UrlFetchApp.fetch('https://api.line.me/v2/bot/message/reply', userRespOptions);
};

const getRestaurant = (grunaviToken, latitude, longitude) => {
  const getRestaurantOptions: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
    method: 'get',
    contentType: 'application/json'
  };
  const json = UrlFetchApp.fetch(
    `https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=${grunaviToken}&latitude=${latitude}&longitude=${longitude}&freeword=ラーメン`,
    getRestaurantOptions
  ).getContentText();
  return JSON.parse(json);
};

const createImageCarousel = (rest: Rest[]) => {
  const columns = [];
  for (const item of rest) {
    let imageUrl = item.image_url.shop_image1
    if (!imageUrl) {
      imageUrl = ''
    }
    columns.push({
      imageUrl: item.image_url.shop_image1,
      action: {
        type: 'uri',
        label: item.name,
        uri: item.url_mobile
      }
    });
  }
  const template = {
    type: 'template',
    altText: 'ramen',
    template: {
      type: 'image_carousel',
      columns: []
    }
  };
  template.template.columns = columns;
  return template;
};

export interface Rest {
  image_url: {
    shop_image1: string;
  };
  name: string;
  url_mobile: string;
}
