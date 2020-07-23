import { GetScriptPropertiesService, Property } from './getScriptPropertiesService';
import { createCarousel } from './carouselService';
import { getRestaurant } from './grunaviService';
import { sendLineReplyMessage, sendLineReplyRamen } from './sendLineService';

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
  const rest = getRestaurant(GRUNAVI_TOKEN, latitude, longitude);
  const imageCarousel = createCarousel(rest);
  sendLineReplyRamen(LINE_BEARER, replyToken, imageCarousel, address, rest.length);
  return ContentService.createTextOutput(JSON.stringify({ status: 'ok' })).setMimeType(
    ContentService.MimeType.JSON
  );
};
