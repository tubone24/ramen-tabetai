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
  for (const hotpepperEntry of hotpepperRest) {
    let include = false;
    grunaviRest.forEach((item, index) => {
      if (item.name === hotpepperEntry.name) {
        item.image_url.shop_image1 = hotpepperEntry.photo.pc.l;
        include = true;
      }
      if (
        index === grunaviRest.length - 1 &&
        !include &&
        !addNameList.includes(hotpepperEntry.name)
      ) {
        include = false;
        grunaviRest.push({
          name: hotpepperEntry.name,
          image_url: {
            shop_image1: hotpepperEntry.photo.pc.l
          },
          address: hotpepperEntry.address,
          url: hotpepperEntry.urls.pc,
          url_mobile: hotpepperEntry.urls.pc,
          tel: '不明',
          pr: {
            pr_long: hotpepperEntry.catch
          }
        });
      }
    });
  }
  return grunaviRest;
};
