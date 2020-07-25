import { GrunaviRest } from './grunaviService';
import { HotpepperRest } from './hotpepperGourmetService';

export const mergeRest = (
  grunaviRest: GrunaviRest[],
  hotpepperRest: HotpepperRest[]
): GrunaviRest[] => {
  // ぐるなびAPIの結果の画像がしょぼいから画像をHotpepperAPIで置き換えて、かつぐるなびAPIの検索結果にないものを加える
  const addNameList = grunaviRest.map(item => {
    return item.name;
  });
  hotpepperRest.forEach( (hotpepperItem) => {
    let include = false;
    grunaviRest.forEach((grunaviItem, index) => {
      if (grunaviItem.name === hotpepperItem.name) {
        grunaviItem.image_url.shop_image1 = hotpepperItem.photo.pc.l;
        include = true;
      }
      if (
        index === grunaviRest.length - 1 &&
        !include &&
        !addNameList.includes(hotpepperItem.name)
      ) {
        include = false;
        grunaviRest.push({
          name: hotpepperItem.name,
          image_url: {
            shop_image1: hotpepperItem.photo.pc.l
          },
          address: hotpepperItem.address,
          url: hotpepperItem.urls.pc,
          url_mobile: hotpepperItem.urls.pc,
          tel: '不明',
          pr: {
            pr_long: ''
          }
        });
      }
    });
  });
  return grunaviRest;
};
