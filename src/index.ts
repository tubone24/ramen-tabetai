import { GetScriptPropertiesService, Property } from './getScriptPropertiesService';
import { createCarousel } from './carouselService';
import { getGrunaviRestaurant } from './grunaviService';
import {
  sendLineReplyMessage,
  sendLineReplyRamen,
  sendLineReplyNoShopMessage,
  getUserInfo,
  sendLineReplyLifelogLink,
  sendLineReplyChangeUserName,
  sendLineReplyChangeSecondName,
  sendLineReplyMenu
} from './LineService';
import { checkTelephoneNumber } from './checkTelephoneService';
import { getHotpepperRestaurant } from './hotpepperGourmetService';
import { mergeRest } from './mergeRest';
import { changeUserName, changeSecondName } from './updateUser';

declare var global: any;

global.doPost = (e: any) => {
  const config: Property = GetScriptPropertiesService.getProperties();
  const LINE_BEARER = config.lineBearer;
  const GRUNAVI_TOKEN = config.grunaviToken;
  const HOTPEPPER_TOKEN = config.hotpepperToken;
  const FIRESTORE_EMAIL = config.fireStoreEmail;
  const FIRESTORE_KEY = config.fireStoreKey;
  const FIRESTPRE_PROJECT_ID = config.fireStoreProjectId;
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
  const userId = events[0].source.userId;
  if (message.type !== 'location') {
    if (message.type === 'text') {
      if (message.text === 'ライフログがみたい') {
        sendLineReplyLifelogLink(LINE_BEARER, replyToken, userId);
        return ContentService.createTextOutput(
          JSON.stringify({ status: 'view lifelog' })
        ).setMimeType(ContentService.MimeType.JSON);
      }
      if (message.text === 'メニュー') {
        sendLineReplyMenu(LINE_BEARER, replyToken);
        return ContentService.createTextOutput(
          JSON.stringify({ status: 'view lifelog' })
        ).setMimeType(ContentService.MimeType.JSON);
      }
      if (message.text.match(/ユーザ名:/)) {
        const userName = message.text.replace('ユーザ名:', '');
        changeUserName(userId, userName, FIRESTORE_EMAIL, FIRESTORE_KEY, FIRESTPRE_PROJECT_ID);
        sendLineReplyChangeUserName(LINE_BEARER, replyToken, userName);
        return ContentService.createTextOutput(
          JSON.stringify({ status: 'change username' })
        ).setMimeType(ContentService.MimeType.JSON);
      }
      if (message.text.match(/ふたつな:/)) {
        const secondName = message.text.replace('ふたつな:', '');
        changeSecondName(userId, secondName, FIRESTORE_EMAIL, FIRESTORE_KEY, FIRESTPRE_PROJECT_ID);
        sendLineReplyChangeSecondName(LINE_BEARER, replyToken, secondName);
        return ContentService.createTextOutput(
          JSON.stringify({ status: 'change secondName' })
        ).setMimeType(ContentService.MimeType.JSON);
      }
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
  const userInfo = getUserInfo(LINE_BEARER, userId);
  // const grunaviRest = getGrunaviRestaurant(GRUNAVI_TOKEN, latitude, longitude);
  // ぐるなびAPI廃止のためAPI叩かない
  const grunaviRest = [];
  const hotpepperRest = getHotpepperRestaurant(HOTPEPPER_TOKEN, latitude, longitude);
  console.log(hotpepperRest);
  if (grunaviRest.length === 0 && hotpepperRest.length === 0) {
    sendLineReplyNoShopMessage(LINE_BEARER, replyToken);
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'not found shop' })
    ).setMimeType(ContentService.MimeType.JSON);
  }
  const replacedGrunaviRest = mergeRest(grunaviRest, hotpepperRest);
  const imageCarousel = createCarousel(replacedGrunaviRest, userInfo);
  sendLineReplyRamen(LINE_BEARER, replyToken, imageCarousel, address, replacedGrunaviRest.length);
  return ContentService.createTextOutput(JSON.stringify({ status: 'ok' })).setMimeType(
    ContentService.MimeType.JSON
  );
};
