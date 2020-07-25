import { Carousel } from './carouselService';

export const sendLineReplyRamen = (
  lineBearer: string,
  replyToken: string,
  imageCarousels: Carousel[],
  address: string,
  length: number
): void => {
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

export const sendLineReplyLifelogLink = (
  lineBearer: string,
  replyToken: string,
  userId: string,
): void => {
  const template = {
    type: 'template',
    altText: 'lifelog',
    template: {
      type: 'confirm',
      "text": "ライフログを開く？",
      "actions": [
        {
          "type":"uri",
          "label":"開く",
          "uri": `https://ramen-tabeteru.web.app/view/?uid=${userId}`,
          "altUri": {
            "desktop" : `https://ramen-tabeteru.web.app/view/?uid=${userId}`
          }
        },
        {
          "type": "message",
          "label": "いいえ",
          "text": "いいえ"
        }
      ]
    }
  };
  const respData = {
    replyToken: replyToken,
    messages: [template]
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

export const sendLineReplyMessage = (lineBearer: string, replyToken: string): void => {
  const msg = {
    type: 'text',
    text: '位置情報を送って近くのラーメン屋を見つけよう！',
    quickReply: {
      items: [
        {
          type: 'action',
          action: {
            type: 'location',
            label: '位置情報を送る'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://raw.githubusercontent.com/tubone24/ramen-tabetai/master/src/assets/heart_blur.png',
          action: {
            "type":"message",
            "label":"ライフログを見る",
            "text":"ライフログがみたい"
          }
        }
      ]
    }
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

export const sendLineReplyNoShopMessage = (lineBearer: string, replyToken: string): void => {
  const msg = {
    type: 'text',
    text: 'ラーメン屋、一軒も見つからなかった...'
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

export const getUserInfo = (lineBearer: string, userId: string): UserProfile => {
  const userInfoOptions: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
    method: 'get',
    contentType: 'application/json',
    headers: {
      Authorization: 'Bearer ' + lineBearer
    }
  };
  return JSON.parse(
    UrlFetchApp.fetch(
      'https://api.line.me/v2/bot/profile/' + userId,
      userInfoOptions
    ).getContentText()
  );
};

export interface UserProfile {
  displayName: string;
  userId: string;
  language: string;
  pictureUrl: string;
  statusMessage: string;
}
