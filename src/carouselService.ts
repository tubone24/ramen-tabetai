import { Rest } from './grunaviService';

export const createImageCarousel = (rest: Rest[]): ImageCarousel[] => {
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

export const createCarousel = (rest: Rest[]): Carousel[] => {
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
    const text = (
      'Tel: ' +
      item.tel +
      '\n' +
      'Address: ' +
      item.address +
      '\n' +
      item.pr.pr_long
    ).substr(0, 60);
    columns.push({
      thumbnailImageUrl: thumbnailImageUrl,
      imageBackgroundColor: '#ffb5b5',
      title: title,
      text: text,
      defaultAction: {
        type: 'uri',
        label: label,
        uri: item.url_mobile,
        altUri: {
          desktop: item.url
        }
      },
      actions: [
        {
          type: 'uri',
          label: 'Webページへ',
          uri: item.url_mobile,
          altUri: {
            desktop: item.url
          }
        },
        {
          type: 'message',
          label: '電話したい',
          text: item.tel
        }
      ]
    });
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
  if (templates.length === 0) {
    //Bug: https://github.com/tubone24/ramen-tabetai/issues/4
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
  }
  return templates;
};

export interface ImageCarousel {
  type: 'template';
  altText: string;
  template: {
    type: 'image_carousel';
    columns: ImageCarouselColumn[];
  };
}

export interface ImageCarouselColumn {
  imageUrl: string;
  action: {
    type: 'uri' | 'message' | 'postback';
    label: string;
    uri: string;
  };
}

export interface Carousel {
  type: 'template';
  altText: string;
  template: {
    type: 'carousel';
    columns: CarouselColumn[];
  };
}

export interface CarouselColumn {
  thumbnailImageUrl: string;
  imageBackgroundColor: string;
  title: string;
  text: string;
  defaultAction: {
    type: string;
    label: string;
    uri: string;
    altUri: {
      desktop: string;
    };
    actions: CarouselAction[];
  };
}

export interface CarouselAction {
  type: 'uri' | 'message';
  label: string;
  uri?: string;
  altUri?: {
    desktop: string;
  };
  text?: string;
}
