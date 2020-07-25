import { mergeRest } from "../../src/mergeRest";

describe('mergeRest', () => {
  it('replaceImage', () => {
    const mockGrunaviRest = [
      {
        "@attributes": {
          "order": 0
        },
        "id": "7584621",
        "update_date": "2019-01-17T05:07:01+09:00",
        "name": "麺と酒菜の店 薫",
        "name_kana": "メントシュサイノミセカオル",
        "latitude": "35.730687",
        "longitude": "139.741272",
        "category": "ラーメン",
        "url": "https://r.gnavi.co.jp/e8n0wy7r0000/?ak=UKutMOVrMfs3qHtpT1euv06MXqPjNZyGW51PnE3qUOk%3D",
        "url_mobile": "http://mobile.gnavi.co.jp/shop/7584621/?ak=UKutMOVrMfs3qHtpT1euv06MXqPjNZyGW51PnE3qUOk%3D",
        "coupon_url": {
          "pc": "",
          "mobile": ""
        },
        "image_url": {
          "shop_image1": "",
          "shop_image2": "",
          "qrcode": "https://c-r.gnst.jp/tool/qr/?id=7584621&q=6"
        },
        "address": "〒170-0002 東京都豊島区巣鴨1-21-9 林ビル1F",
        "tel": "03-6874-9306",
        "tel_sub": "",
        "fax": "",
        "opentime": "",
        "holiday": "",
        "access": {
          "line": "都営三田線",
          "station": "千石駅",
          "station_exit": "A4口",
          "walk": "徒歩5",
          "note": ""
        },
        "parking_lots": "",
        "pr": {
          "pr_short": "",
          "pr_long": ""
        },
        "code": {
          "areacode": "AREA110",
          "areaname": "関東",
          "prefcode": "PREF13",
          "prefname": "東京都",
          "areacode_s": "AREAS2161",
          "areaname_s": "巣鴨",
          "category_code_l": [
            "RSFST08000",
            ""
          ],
          "category_name_l": [
            "ラーメン・麺料理",
            ""
          ],
          "category_code_s": [
            "RSFST08008",
            ""
          ],
          "category_name_s": [
            "ラーメン",
            ""
          ]
        },
        "budget": "",
        "party": "",
        "lunch": "",
        "credit_card": "",
        "e_money": "",
        "flags": {
          "mobile_site": 1,
          "mobile_coupon": 0,
          "pc_coupon": 0
        }
      },
      {
        "@attributes": {
          "order": 1
        },
        "id": "7583808",
        "update_date": "2018-11-15T05:03:33+09:00",
        "name": "HERO KING",
        "name_kana": "ヒーローキング",
        "latitude": "35.730468",
        "longitude": "139.742347",
        "category": "ラーメン",
        "url": "https://r.gnavi.co.jp/f9ujtajf0000/?ak=UKutMOVrMfs3qHtpT1euv06MXqPjNZyGW51PnE3qUOk%3D",
        "url_mobile": "http://mobile.gnavi.co.jp/shop/7583808/?ak=UKutMOVrMfs3qHtpT1euv06MXqPjNZyGW51PnE3qUOk%3D",
        "coupon_url": {
          "pc": "",
          "mobile": ""
        },
        "image_url": {
          "shop_image1": "",
          "shop_image2": "",
          "qrcode": "https://c-r.gnst.jp/tool/qr/?id=7583808&q=6"
        },
        "address": "〒113-0021 東京都文京区本駒込6-5-1 ",
        "tel": "03-6336-6831",
        "tel_sub": "",
        "fax": "",
        "opentime": "",
        "holiday": "",
        "access": {
          "line": "都営三田線",
          "station": "千石駅",
          "station_exit": "A4口",
          "walk": "徒歩4",
          "note": ""
        },
        "parking_lots": "",
        "pr": {
          "pr_short": "",
          "pr_long": ""
        },
        "code": {
          "areacode": "AREA110",
          "areaname": "関東",
          "prefcode": "PREF13",
          "prefname": "東京都",
          "areacode_s": "AREAS2162",
          "areaname_s": "駒込",
          "category_code_l": [
            "RSFST08000",
            ""
          ],
          "category_name_l": [
            "ラーメン・麺料理",
            ""
          ],
          "category_code_s": [
            "RSFST08008",
            ""
          ],
          "category_name_s": [
            "ラーメン",
            ""
          ]
        },
        "budget": "",
        "party": "",
        "lunch": "",
        "credit_card": "",
        "e_money": "",
        "flags": {
          "mobile_site": 1,
          "mobile_coupon": 0,
          "pc_coupon": 0
        }
      },
      {
        "@attributes": {
          "order": 2
        },
        "id": "7645916",
        "update_date": "2018-12-20T05:04:52+09:00",
        "name": "らぁめん 生姜は文化",
        "name_kana": "ラァメンショウガハブンカ",
        "latitude": "35.731006",
        "longitude": "139.741789",
        "category": "ラーメン",
        "url": "https://r.gnavi.co.jp/rnps74f50000/?ak=UKutMOVrMfs3qHtpT1euv06MXqPjNZyGW51PnE3qUOk%3D",
        "url_mobile": "http://mobile.gnavi.co.jp/shop/7645916/?ak=UKutMOVrMfs3qHtpT1euv06MXqPjNZyGW51PnE3qUOk%3D",
        "coupon_url": {
          "pc": "",
          "mobile": ""
        },
        "image_url": {
          "shop_image1": "",
          "shop_image2": "",
          "qrcode": "https://c-r.gnst.jp/tool/qr/?id=7645916&q=6"
        },
        "address": "〒113-0021 東京都文京区本駒込6-6-2 ",
        "tel": "03-3942-1112",
        "tel_sub": "",
        "fax": "",
        "opentime": "",
        "holiday": "",
        "access": {
          "line": "JR山手線",
          "station": "巣鴨駅",
          "station_exit": "南口",
          "walk": "徒歩4",
          "note": ""
        },
        "parking_lots": "",
        "pr": {
          "pr_short": "",
          "pr_long": ""
        },
        "code": {
          "areacode": "AREA110",
          "areaname": "関東",
          "prefcode": "PREF13",
          "prefname": "東京都",
          "areacode_s": "AREAS2162",
          "areaname_s": "駒込",
          "category_code_l": [
            "RSFST08000",
            ""
          ],
          "category_name_l": [
            "ラーメン・麺料理",
            ""
          ],
          "category_code_s": [
            "RSFST08008",
            ""
          ],
          "category_name_s": [
            "ラーメン",
            ""
          ]
        },
        "budget": "",
        "party": "",
        "lunch": "",
        "credit_card": "",
        "e_money": "",
        "flags": {
          "mobile_site": 1,
          "mobile_coupon": 0,
          "pc_coupon": 0
        }
      },
      {
        "@attributes": {
          "order": 3
        },
        "id": "gg38700",
        "update_date": "2019-11-26T09:16:31+09:00",
        "name": "Japanese Soba Noodles 蔦",
        "name_kana": "ジャパニーズソバヌードルツタ",
        "latitude": "35.732948",
        "longitude": "139.740624",
        "category": "巣鴨×ラーメン",
        "url": "https://r.gnavi.co.jp/man9atwh0000/?ak=UKutMOVrMfs3qHtpT1euv06MXqPjNZyGW51PnE3qUOk%3D",
        "url_mobile": "http://mobile.gnavi.co.jp/shop/gg38700/?ak=UKutMOVrMfs3qHtpT1euv06MXqPjNZyGW51PnE3qUOk%3D",
        "coupon_url": {
          "pc": "",
          "mobile": ""
        },
        "image_url": {
          "shop_image1": "https://rimage.gnst.jp/rest/img/man9atwh0000/t_0n5g.jpg",
          "shop_image2": "https://rimage.gnst.jp/rest/img/man9atwh0000/t_0n5f.jpg",
          "qrcode": "https://c-r.gnst.jp/tool/qr/?id=gg38700&q=6"
        },
        "address": "〒170-0002 東京都豊島区巣鴨1-14-1",
        "tel": "050-3313-7737",
        "tel_sub": "03-3943-1007",
        "fax": "",
        "opentime": " 11:00～16:00、18:00～21:00(整理券制 7：00より配布（時間指定制、預り金として1,000円を預ける。）)",
        "holiday": "毎週水曜日",
        "access": {
          "line": "ＪＲ",
          "station": "巣鴨駅",
          "station_exit": "",
          "walk": "2",
          "note": ""
        },
        "parking_lots": "",
        "pr": {
          "pr_short": "◆JR 巣鴨駅 徒歩2分 ◆素材に一切の妥協を許さない、何度でも食べたくなるラーメンをどうぞ ◆自信を持っておすすめする一杯◎醤油Soba ⇒ 900円（税込）",
          "pr_long": "「行列に並んでも食べたい」と思っていただけるような一杯をご提供できるよう、\n自家製麺やタレ、スープなど、使用する食材に妥協しない、\n何度でも食べたくなる味わいのラーメンをご提供しております。\n◆soba\n・醤油Soba …  900円（税込）\n・塩Soba …  900円（税込）\n・煮干Soba …  800円（税込）\n・醤油つけSoba … 1,000円（税込）\nすぐに売り切れてしまう人気のサイドメニュー「肉飯」は、\n存在感溢れる焼豚がたっぷり盛られており、食べ応えも抜群。\nラーメンとともに、是非お召し上がりいただきたい一品です。\n日本人のみならず、外国人観光客も多くご来店いただく当店。\n「忘れられない新しい味わい」を、お楽しみください。"
        },
        "code": {
          "areacode": "AREA110",
          "areaname": "関東",
          "prefcode": "PREF13",
          "prefname": "東京都",
          "areacode_s": "AREAS2161",
          "areaname_s": "巣鴨",
          "category_code_l": [
            "RSFST08000",
            ""
          ],
          "category_name_l": [
            "ラーメン・麺料理",
            ""
          ],
          "category_code_s": [
            "RSFST08008",
            ""
          ],
          "category_name_s": [
            "ラーメン",
            ""
          ]
        },
        "budget": 1500,
        "party": "",
        "lunch": 1500,
        "credit_card": "",
        "e_money": "",
        "flags": {
          "mobile_site": 1,
          "mobile_coupon": 0,
          "pc_coupon": 0
        }
      },
      {
        "@attributes": {
          "order": 4
        },
        "id": "7131963",
        "update_date": "2017-08-29T16:51:28+09:00",
        "name": "巣鴨家",
        "name_kana": "スガモヤ",
        "latitude": "35.732667",
        "longitude": "139.739130",
        "category": "ラーメン",
        "url": "https://r.gnavi.co.jp/fcegmyg20000/?ak=UKutMOVrMfs3qHtpT1euv06MXqPjNZyGW51PnE3qUOk%3D",
        "url_mobile": "http://mobile.gnavi.co.jp/shop/7131963/?ak=UKutMOVrMfs3qHtpT1euv06MXqPjNZyGW51PnE3qUOk%3D",
        "coupon_url": {
          "pc": "",
          "mobile": ""
        },
        "image_url": {
          "shop_image1": "",
          "shop_image2": "",
          "qrcode": "https://c-r.gnst.jp/tool/qr/?id=7131963&q=6"
        },
        "address": "〒170-0002 東京都豊島区巣鴨1-17-8 NZ1178ビル1F",
        "tel": "03-6912-1382",
        "tel_sub": "",
        "fax": "",
        "opentime": "",
        "holiday": "",
        "access": {
          "line": "JR山手線",
          "station": "巣鴨駅",
          "station_exit": "南口",
          "walk": "徒歩1",
          "note": ""
        },
        "parking_lots": "",
        "pr": {
          "pr_short": "",
          "pr_long": ""
        },
        "code": {
          "areacode": "AREA110",
          "areaname": "関東",
          "prefcode": "PREF13",
          "prefname": "東京都",
          "areacode_s": "AREAS2161",
          "areaname_s": "巣鴨",
          "category_code_l": [
            "RSFST08000",
            ""
          ],
          "category_name_l": [
            "ラーメン・麺料理",
            ""
          ],
          "category_code_s": [
            "RSFST08008",
            ""
          ],
          "category_name_s": [
            "ラーメン",
            ""
          ]
        },
        "budget": "",
        "party": "",
        "lunch": "",
        "credit_card": "",
        "e_money": "",
        "flags": {
          "mobile_site": 1,
          "mobile_coupon": 0,
          "pc_coupon": 0
        }
      },
      {
        "@attributes": {
          "order": 5
        },
        "id": "6284776",
        "update_date": "2017-09-22T05:04:10+09:00",
        "name": "やきそば‐HIT",
        "name_kana": "ヤキソバヒット",
        "latitude": "35.732734",
        "longitude": "139.738811",
        "category": "ラーメン",
        "url": "https://r.gnavi.co.jp/fc0fr9r50000/?ak=UKutMOVrMfs3qHtpT1euv06MXqPjNZyGW51PnE3qUOk%3D",
        "url_mobile": "http://mobile.gnavi.co.jp/shop/6284776/?ak=UKutMOVrMfs3qHtpT1euv06MXqPjNZyGW51PnE3qUOk%3D",
        "coupon_url": {
          "pc": "",
          "mobile": ""
        },
        "image_url": {
          "shop_image1": "",
          "shop_image2": "",
          "qrcode": "https://c-r.gnst.jp/tool/qr/?id=6284776&q=6"
        },
        "address": "〒170-0002 東京都豊島区巣鴨1-17-3 ",
        "tel": "03-3944-3903",
        "tel_sub": "",
        "fax": "",
        "opentime": "",
        "holiday": "",
        "access": {
          "line": "JR山手線",
          "station": "巣鴨駅",
          "station_exit": "南口",
          "walk": "徒歩1",
          "note": ""
        },
        "parking_lots": "",
        "pr": {
          "pr_short": "",
          "pr_long": ""
        },
        "code": {
          "areacode": "AREA110",
          "areaname": "関東",
          "prefcode": "PREF13",
          "prefname": "東京都",
          "areacode_s": "AREAS2161",
          "areaname_s": "巣鴨",
          "category_code_l": [
            "RSFST08000",
            ""
          ],
          "category_name_l": [
            "ラーメン・麺料理",
            ""
          ],
          "category_code_s": [
            "RSFST08008",
            ""
          ],
          "category_name_s": [
            "ラーメン",
            ""
          ]
        },
        "budget": "",
        "party": "",
        "lunch": "",
        "credit_card": "",
        "e_money": "",
        "flags": {
          "mobile_site": 1,
          "mobile_coupon": 0,
          "pc_coupon": 0
        }
      }
    ];
    const mockHotpepperrest = [
      {
        "access": "地下鉄丸ノ内線 新大塚駅徒歩約1分",
        "address": "東京都豊島区東池袋５-５２-１５",
        "band": "不可",
        "barrier_free": "なし",
        "budget": {
          "average": "690円",
          "code": "B001",
          "name": "1501～2000円"
        },
        "budget_memo": "",
        "capacity": 2,
        "card": "利用不可",
        "catch": "",
        "charter": "貸切不可",
        "child": "お子様連れ歓迎",
        "close": "1/1のみ",
        "coupon_urls": {
          "pc": "https://www.hotpepper.jp/strJ000979479/map/?vos=nhppalsa000016",
          "sp": "https://www.hotpepper.jp/strJ000979479/scoupon/?vos=nhppalsa000016"
        },
        "course": "なし",
        "english": "なし",
        "free_drink": "なし",
        "free_food": "なし",
        "genre": {
          "catch": "まろやかな超濃厚魚介とんこつスープが自慢",
          "code": "G013",
          "name": "ラーメン"
        },
        "horigotatsu": "なし",
        "id": "J000979479",
        "karaoke": "なし",
        "ktai_coupon": 1,
        "large_area": {
          "code": "Z011",
          "name": "東京"
        },
        "large_service_area": {
          "code": "SS10",
          "name": "関東"
        },
        "lat": 35.7259634075,
        "lng": 139.7294695024,
        "logo_image": "https://imgfp.hotp.jp/SYS/cmn/images/common/diary/custom/m30_img_noimage.gif",
        "lunch": "あり",
        "middle_area": {
          "code": "Y057",
          "name": "巣鴨・大塚・駒込"
        },
        "midnight": "営業している",
        "mobile_access": "地下鉄丸ﾉ内線 新大塚駅徒歩約1分",
        "name": "麺と酒菜の店 薫",
        "name_kana": "らーめんはるき　しんおおつかてん",
        "non_smoking": "全面禁煙",
        "open": "月～日、祝日、祝前日: 11:00～翌1:00",
        "other_memo": "",
        "parking": "なし",
        "party_capacity": 20,
        "pet": "不可",
        "photo": {
          "mobile": {
            "l": "https://imgfp.hotp.jp/IMGH/54/33/P014185433/P014185433_168.jpg",
            "s": "https://imgfp.hotp.jp/IMGH/54/33/P014185433/P014185433_100.jpg"
          },
          "pc": {
            "l": "https://imgfp.hotp.jp/IMGH/54/33/P014185433/P014185433_238.jpg",
            "m": "https://imgfp.hotp.jp/IMGH/54/33/P014185433/P014185433_168.jpg",
            "s": "https://imgfp.hotp.jp/IMGH/54/33/P014185433/P014185433_58_s.jpg"
          }
        },
        "private_room": "なし",
        "service_area": {
          "code": "SA11",
          "name": "東京"
        },
        "shop_detail_memo": "",
        "show": "なし",
        "small_area": {
          "code": "XA0N",
          "name": "新大塚"
        },
        "station_name": "新大塚",
        "tatami": "なし",
        "tv": "なし",
        "urls": {
          "pc": "https://www.hotpepper.jp/strJ000979479/?vos=nhppalsa000016"
        },
        "wedding": "",
        "wifi": "未確認"
      },
      {
        "access": "都営三田線「白山駅」Ａ3出口　徒歩1分",
        "address": "東京都文京区白山５丁目３６－２",
        "band": "不可",
        "barrier_free": "あり",
        "budget": {
          "average": "1000円",
          "code": "B001",
          "name": "1501～2000円"
        },
        "budget_memo": "",
        "capacity": 16,
        "card": "利用不可",
        "catch": "粋を感じさせる外観 モダンな店内",
        "charter": "貸切不可",
        "child": "お子様連れ歓迎",
        "close": "不定休",
        "coupon_urls": {
          "pc": "https://www.hotpepper.jp/strJ000989649/map/?vos=nhppalsa000016",
          "sp": "https://www.hotpepper.jp/strJ000989649/scoupon/?vos=nhppalsa000016"
        },
        "course": "なし",
        "english": "なし",
        "free_drink": "なし",
        "free_food": "なし",
        "genre": {
          "catch": "当店人気ＮＯ１の油そばをご賞味ください★",
          "code": "G013",
          "name": "ラーメン"
        },
        "horigotatsu": "なし",
        "id": "J000989649",
        "karaoke": "なし",
        "ktai_coupon": 1,
        "large_area": {
          "code": "Z011",
          "name": "東京"
        },
        "large_service_area": {
          "code": "SS10",
          "name": "関東"
        },
        "lat": 35.721483127,
        "lng": 139.7520274875,
        "logo_image": "https://imgfp.hotp.jp/SYS/cmn/images/common/diary/custom/m30_img_noimage.gif",
        "lunch": "あり",
        "middle_area": {
          "code": "Y006",
          "name": "水道橋・飯田橋・神楽坂"
        },
        "midnight": "営業している",
        "mobile_access": "都営三田線｢白山駅｣A3出口 徒歩1分",
        "name": "麺や越",
        "name_kana": "めんやごえ",
        "non_smoking": "一部禁煙",
        "open": "月～金、祝前日: 11:30～翌0:00 （料理L.O. 23:30）土、日、祝日: 11:30～21:00 （料理L.O. 20:30）",
        "other_memo": "",
        "parking": "なし",
        "party_capacity": "",
        "pet": "不可",
        "photo": {
          "mobile": {
            "l": "https://imgfp.hotp.jp/IMGH/73/07/P022157307/P022157307_168.jpg",
            "s": "https://imgfp.hotp.jp/IMGH/73/07/P022157307/P022157307_100.jpg"
          },
          "pc": {
            "l": "https://imgfp.hotp.jp/IMGH/73/07/P022157307/P022157307_238.jpg",
            "m": "https://imgfp.hotp.jp/IMGH/73/07/P022157307/P022157307_168.jpg",
            "s": "https://imgfp.hotp.jp/IMGH/73/07/P022157307/P022157307_58_s.jpg"
          }
        },
        "private_room": "なし",
        "service_area": {
          "code": "SA11",
          "name": "東京"
        },
        "shop_detail_memo": "",
        "show": "なし",
        "small_area": {
          "code": "XA1I",
          "name": "白山"
        },
        "station_name": "白山",
        "tatami": "なし",
        "tv": "なし",
        "urls": {
          "pc": "https://www.hotpepper.jp/strJ000989649/?vos=nhppalsa000016"
        },
        "wedding": "",
        "wifi": "なし"
      },
      {
        "access": "山手線　大塚駅より徒歩5分",
        "address": "東京都豊島区北大塚２－８－８　北大塚ビル１F",
        "band": "不可",
        "barrier_free": "なし",
        "budget": {
          "average": "1000円",
          "code": "B001",
          "name": "1501～2000円"
        },
        "budget_memo": "お通し代なし",
        "capacity": 20,
        "card": "利用不可",
        "catch": "太陽のラーメンとは？ ♪めがねの日♪",
        "charter": "貸切不可",
        "child": "お子様連れ歓迎",
        "close": "月",
        "coupon_urls": {
          "pc": "https://www.hotpepper.jp/strJ000732789/map/?vos=nhppalsa000016",
          "sp": "https://www.hotpepper.jp/strJ000732789/scoupon/?vos=nhppalsa000016"
        },
        "course": "なし",
        "english": "なし",
        "free_drink": "なし",
        "free_food": "なし",
        "genre": {
          "catch": "おいしくてヘルシー！フレッシュなラーメン",
          "code": "G013",
          "name": "ラーメン"
        },
        "horigotatsu": "なし",
        "id": "J000732789",
        "karaoke": "なし",
        "ktai_coupon": 1,
        "large_area": {
          "code": "Z011",
          "name": "東京"
        },
        "large_service_area": {
          "code": "SS10",
          "name": "関東"
        },
        "lat": 35.733611638,
        "lng": 139.726689431,
        "logo_image": "https://imgfp.hotp.jp/IMGH/30/84/P010113084/P010113084_69.jpg",
        "lunch": "あり",
        "middle_area": {
          "code": "Y057",
          "name": "巣鴨・大塚・駒込"
        },
        "midnight": "営業している",
        "mobile_access": "山手線 大塚駅より徒歩5分",
        "name": "太陽のトマト麺 大塚北口支店",
        "name_kana": "たいようのとまとめん　おおつかきたぐちしてん",
        "non_smoking": "全面禁煙",
        "open": "火～土、祝前日: 11:00～翌1:00 （料理L.O. 翌0:30 ドリンクL.O. 翌0:30）日、祝日: 11:00～翌0:00 （料理L.O. 23:30 ドリンクL.O. 23:30）",
        "other_memo": "",
        "parking": "なし",
        "party_capacity": "",
        "pet": "不可",
        "photo": {
          "mobile": {
            "l": "https://imgfp.hotp.jp/IMGH/67/80/P019506780/P019506780_168.jpg",
            "s": "https://imgfp.hotp.jp/IMGH/67/80/P019506780/P019506780_100.jpg"
          },
          "pc": {
            "l": "https://imgfp.hotp.jp/IMGH/67/80/P019506780/P019506780_238.jpg",
            "m": "https://imgfp.hotp.jp/IMGH/67/80/P019506780/P019506780_168.jpg",
            "s": "https://imgfp.hotp.jp/IMGH/67/80/P019506780/P019506780_58_s.jpg"
          }
        },
        "private_room": "なし",
        "service_area": {
          "code": "SA11",
          "name": "東京"
        },
        "shop_detail_memo": "",
        "show": "なし",
        "small_area": {
          "code": "X142",
          "name": "大塚"
        },
        "station_name": "大塚",
        "tatami": "なし",
        "tv": "なし",
        "urls": {
          "pc": "https://www.hotpepper.jp/strJ000732789/?vos=nhppalsa000016"
        },
        "wedding": "",
        "wifi": "あり"
      },
      {
        "access": "JR山手線駒込駅東口から徒歩1分",
        "address": "東京都豊島区駒込１-29-8",
        "band": "不可",
        "barrier_free": "なし ：お手伝いが必要な方はお声掛け下さい。",
        "budget": {
          "average": "【平均】1000円",
          "code": "B011",
          "name": "1001～1500円"
        },
        "budget_memo": "",
        "capacity": 10,
        "card": "利用不可",
        "catch": "本場四川の担々麺 こだわりの調味料・スープ",
        "charter": "貸切不可 ：貸切はできませんが、お気軽に店舗へお問合せ下さい。",
        "child": "お子様連れOK ：アレルギー等ございましたら、お気軽にお申し付けください。",
        "close": "不定休になります。",
        "coupon_urls": {
          "pc": "https://www.hotpepper.jp/strJ001125061/map/?vos=nhppalsa000016",
          "sp": "https://www.hotpepper.jp/strJ001125061/scoupon/?vos=nhppalsa000016"
        },
        "course": "なし",
        "english": "なし",
        "free_drink": "なし ：飲み放題コースはございませんが、美味しい料理をご堪能ください。",
        "free_food": "なし ：コースはございませんが、お腹一杯お楽しみ下さい♪",
        "genre": {
          "catch": "駒込 担々麺 激辛 こだわり",
          "code": "G013",
          "name": "ラーメン"
        },
        "horigotatsu": "なし ：掘りごたつはございません。",
        "id": "J001125061",
        "karaoke": "なし",
        "ktai_coupon": 1,
        "large_area": {
          "code": "Z011",
          "name": "東京"
        },
        "large_service_area": {
          "code": "SS10",
          "name": "関東"
        },
        "lat": 35.7370343489,
        "lng": 139.7489782317,
        "logo_image": "https://imgfp.hotp.jp/IMGH/98/84/P028359884/P028359884_69.jpg",
        "lunch": "あり",
        "middle_area": {
          "code": "Y057",
          "name": "巣鴨・大塚・駒込"
        },
        "midnight": "営業していない",
        "mobile_access": "JR山手線駒込駅東口から徒歩1分",
        "name": "担々麺 辣椒漢 駒込店",
        "name_kana": "たんたんめん　らしょうはん　こまごめてん",
        "non_smoking": "全面禁煙",
        "open": "月～金: 11:30～14:30 （料理L.O. 14:30 ドリンクL.O. 14:30）17:00～23:00 （料理L.O. 22:00 ドリンクL.O. 22:00）土、祝前日: 11:30～15:00 （料理L.O. 14:30 ドリンクL.O. 14:30）18:00～23:00 （料理L.O. 22:00 ドリンクL.O. 22:00）日、祝日: 11:00～15:00 （料理L.O. 14:30 ドリンクL.O. 14:30）18:00～22:00 （料理L.O. 21:00 ドリンクL.O. 21:00）",
        "other_memo": "その他お問い合わせお待ちしております！",
        "parking": "なし ：お車でのご来店はご遠慮ください。",
        "party_capacity": 10,
        "pet": "不可",
        "photo": {
          "mobile": {
            "l": "https://imgfp.hotp.jp/IMGH/44/04/P028634404/P028634404_168.jpg",
            "s": "https://imgfp.hotp.jp/IMGH/44/04/P028634404/P028634404_100.jpg"
          },
          "pc": {
            "l": "https://imgfp.hotp.jp/IMGH/44/04/P028634404/P028634404_238.jpg",
            "m": "https://imgfp.hotp.jp/IMGH/44/04/P028634404/P028634404_168.jpg",
            "s": "https://imgfp.hotp.jp/IMGH/44/04/P028634404/P028634404_58_s.jpg"
          }
        },
        "private_room": "なし ：個室はございません。",
        "service_area": {
          "code": "SA11",
          "name": "東京"
        },
        "shop_detail_memo": "ご来店お待ちしております♪",
        "show": "なし",
        "small_area": {
          "code": "XA0M",
          "name": "駒込"
        },
        "station_name": "駒込",
        "tatami": "なし ：お座敷はございません。",
        "tv": "なし",
        "urls": {
          "pc": "https://www.hotpepper.jp/strJ001125061/?vos=nhppalsa000016"
        },
        "wedding": "ご協力できるところはさせて頂きます。お気軽に店舗へお問合せ下さい！",
        "wifi": "あり"
      }
    ];
    const actual = mergeRest(mockGrunaviRest, mockHotpepperrest);
    expect(actual[0].image_url.shop_image1).toEqual('https://imgfp.hotp.jp/IMGH/54/33/P014185433/P014185433_238.jpg');
    expect(actual[6].name).toEqual('麺や越');
    expect(actual[7].name).toEqual('太陽のトマト麺 大塚北口支店');
    expect(actual[8].name).toEqual('担々麺 辣椒漢 駒込店');
  });
});
