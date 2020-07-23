declare var global: any;

global.doPost = (e: any) => {
  const LINE_BEARER =
    'xxxxxxxxxxxxxxxxxxxxxx';
  const params = JSON.parse(e.postData.getDataAsString());
  console.log(JSON.stringify(params));
  const events = params.events;
  const type = events[0].type;
  const replyToken = events[0].replyToken;
  const userId = events[0].source.userId;
  const timeStamp = events[0].timestamp;

  if (type !== 'location') {
    return ContentService.createTextOutput(JSON.stringify({ status: 'not location' })).setMimeType(
      ContentService.MimeType.JSON
    );
  }

};
