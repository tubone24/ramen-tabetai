export const createImageCarousel = (rest: Rest[]) => {
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

export const createCarousel = (rest: Rest[]) => {
  const templates = [];
  let columns = [];
  rest.forEach((item, index) => {
    let thumbnailImageUrl = item.image_url.shop_image1;
    if (!thumbnailImageUrl) {
      thumbnailImageUrl =
        'https://raw.githubusercontent.com/tubone24/ramen-tabetai/master/src/assets/no_image_square.jpg';
    }
    const title = item.name.substr(0, 40);
    const label = item.name.substr(0, 12);
    const text = item.pr.pr_long.substr(0, 60);
    columns.push({
        thumbnailImageUrl: thumbnailImageUrl,
        title: title,
        text: text,
        defaultAction: {
          type: 'uri',
          label: label,
          uri: item.url_mobile
        },
        action: [
          {
            type: 'uri',
            label: 'Webページへ',
            uri: item.url_mobile
          },
          {
            type:'message',
            label:'電話したい',
            text: item.tel
          }
        ],
      }
    );
    if ((index + 1) % 10 === 0) {
      const template = {
        type: 'template',
        altText: 'ramen',
        template: {
          type: 'carousel',
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
  tel: string
  pr: {
    pr_long: string
  }
}
