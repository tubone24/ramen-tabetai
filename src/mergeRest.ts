import { GrunaviRest } from './grunaviService';
import { HotpepperRest } from './hotpepperGourmetService';

export const mergeRest = (
  grunaviRest: GrunaviRest[],
  hotpepperRest: HotpepperRest[]
): GrunaviRest[] => {
  // ぐるなびAPIの結果の画像がしょぼいから画像をHotpepperAPIで置き換えて、かつぐるなびAPIの検索結果にないものを加える
  for (const hotpepperEntry of hotpepperRest) {
    let include = false;
    grunaviRest.forEach((grunaviItem) => {
      if (grunaviItem.name === hotpepperEntry.name) {
        grunaviItem.image_url.shop_image1 = hotpepperEntry.photo.pc.l;
        include = true;
      }
    });
    if (!include) {
      include = false;
      grunaviRest.push({
        name: hotpepperEntry.name,
        image_url: {
          shop_image1: hotpepperEntry.photo.pc.l
        },
        id: hotpepperEntry.id,
        latitude: hotpepperEntry.lat.toString(10),
        longitude: hotpepperEntry.lng.toString(10),
        address: hotpepperEntry.address,
        url: hotpepperEntry.urls.pc,
        url_mobile: hotpepperEntry.urls.pc,
        tel: '不明',
        pr: {
          pr_long: ''
        }
      })
    }
  }

  return grunaviRest;
};
