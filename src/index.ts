import { GetScriptPropertiesService, Property } from './getScriptPropertiesService';

declare var global: any;

global.doPost = (e: any) => {
  const config: Property = GetScriptPropertiesService.getProperties();
  const LINE_BEARER = config.lineBearer;
  const GRUNAVI_TOKEN = config.grunaviToken;
  const params = JSON.parse(e.postData.getDataAsString());
  console.log(JSON.stringify(params));
  const events = params.events;
  const type = events[0].type;
  const replyToken = events[0].replyToken;

  if (type !== 'message') {
    return ContentService.createTextOutput(JSON.stringify({ status: 'not message' })).setMimeType(
      ContentService.MimeType.JSON
    );
  }
  const message = events[0].message;
  if (message.type !== 'location') {
    sendLineReplyMessage(LINE_BEARER, replyToken);
    return ContentService.createTextOutput(JSON.stringify({ status: 'not location' })).setMimeType(
      ContentService.MimeType.JSON
    );
  }
  const latitude = message.latitude;
  const longitude = message.longitude;
  const address = message.address;
  const rest = getRestaurant(GRUNAVI_TOKEN, latitude, longitude).rest;
  const imageCarousel = createImageCarousel(rest);
  sendLineReplyRamen(LINE_BEARER, replyToken, imageCarousel, address, rest.length);
};

const sendLineReplyRamen = (lineBearer, replyToken, imageCarousels, address, length) => {
  let msg;
  if (length > 40) {
    msg = {
      type: 'text',
      text: address + '付近のラーメン屋さんは' + length + '軒あるようですが上位40軒を表示します。'
    };
  } else {
    msg = {
      type: 'text',
      text: address + '付近のラーメン屋さんは' + length + '軒あるようです'
    };
  }
  if (imageCarousels.length > 4) {
    imageCarousels = imageCarousels.slice(0, 4);
  }
  const respData = {
    replyToken: replyToken,
    messages: [msg, ...imageCarousels]
  };
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

const sendLineReplyMessage = (lineBearer, replyToken) => {
  const msg = {
    type: 'text',
    text: 'そんなことよりラーメン食え！'
  };
  const respData = {
    replyToken: replyToken,
    messages: [msg]
  };
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
    `https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=${grunaviToken}&latitude=${latitude}&longitude=${longitude}&hit_per_page=100&category_s=RSFST08008,RSFST08009,RSFST08012,RSFST08013`,
    getRestaurantOptions
  ).getContentText();
  console.log(json);
  return JSON.parse(json);
};

const createImageCarousel = (rest: Rest[]) => {
  const templates = [];
  let columns = [];
  rest.forEach((item, index) => {
    let imageUrl = item.image_url.shop_image1;
    if (!imageUrl) {
      imageUrl =
        'https://raw.githubusercontent.com/tubone24/ramen-tabetai/master/src/assets/no_image_square.jpg';
    }
    const label = item.name.substr(0, 11);
    columns.push({
      imageUrl: imageUrl,
      action: {
        type: 'uri',
        label: label,
        uri: item.url_mobile
      }
    });
    if ((index + 1) % 10 === 0) {
      const template = {
        type: 'template',
        altText: 'ramen',
        template: {
          type: 'image_carousel',
          columns: []
        }
      };
      template.template.columns = columns;
      templates.push(template);
      columns = [];
    }
  });
  return templates;
};

export interface Rest {
  image_url: {
    shop_image1: string;
  };
  name: string;
  url_mobile: string;
}
