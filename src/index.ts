import { GetScriptPropertiesService, Property } from './getScriptPropertiesService';
import { createCarousel } from './carouselService';
import { getGrunaviRestaurant } from './grunaviService';
import {
  sendLineReplyMessage,
  sendLineReplyRamen,
  sendLineReplyNoShopMessage
} from './sendLineService';
import { checkTelephoneNumber } from "./checkTelephoneService";
import { getHotpepperRestaurant } from "./hotpepperGourmetService";
import {mergeRest} from "./mergeRest";

declare var global: any;

global.doPost = (e: any) => {
  const config: Property = GetScriptPropertiesService.getProperties();
  const LINE_BEARER = config.lineBearer;
  const GRUNAVI_TOKEN = config.grunaviToken;
  const HOTPEPPER_TOKEN = config.hotpepperToken;
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
    if (message.type === 'text') {
      if (checkTelephoneNumber(message.text)) {
        return ContentService.createTextOutput(JSON.stringify({ status: 'telephone' })).setMimeType(
          ContentService.MimeType.JSON
        );
      }
    }
    sendLineReplyMessage(LINE_BEARER, replyToken);
    return ContentService.createTextOutput(JSON.stringify({ status: 'not location' })).setMimeType(
      ContentService.MimeType.JSON
    );
  }
  const latitude = message.latitude;
  const longitude = message.longitude;
  const address = message.address;
  const grunaviRest = getGrunaviRestaurant(GRUNAVI_TOKEN, latitude, longitude);
  const hotpepperRest = getHotpepperRestaurant(HOTPEPPER_TOKEN, latitude, longitude);
  if (grunaviRest.length === 0) {
    sendLineReplyNoShopMessage(LINE_BEARER, replyToken);
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'not found shop' })
    ).setMimeType(ContentService.MimeType.JSON);
  }
  const replacedGrunaviRest = mergeRest(grunaviRest, hotpepperRest);
  const imageCarousel = createCarousel(replacedGrunaviRest);
  sendLineReplyRamen(LINE_BEARER, replyToken, imageCarousel, address, grunaviRest.length);
  return ContentService.createTextOutput(JSON.stringify({ status: 'ok' })).setMimeType(
    ContentService.MimeType.JSON
  );
};
