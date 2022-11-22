import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public dataForHeaderButtonComponent: any = {
    buttonData: ["CATALOG", "TV, Audio, Video",
      "Computers, Notebooks, Tablets", "Phones and Communication",
      "Household Appliances", "Kitchen Appliances", "Air conditioning equipment"],
    imagesDataUrl: [
      "https://www.zigzag.am/pub/media/categories/miele.svg",
      "https://www.zigzag.am/pub/media/categories/bosch.svg",
      "https://www.zigzag.am/pub/media/categories/k-array.svg"
    ],
    air: [
      "Air Conditioners",
      "Fans",
      "Heating equipments",
      "Аir purifiers, Humidifiers"
    ],
    airData: [
      "Split systems",
      "Convector Heaters",
      "Fan Heaters",
      "Electric Fireplaces",
      "Infrared Heaters",
      "Infrared and convector heaters"
    ]
  }

  public dataHeaderLinks: Array<any> = ["About us", "Stores", "Services", "Special offers", "Gift card", "Credit"]
  public products: Array<any> =
    [{
      title: "Hot prices",
      items: [
        {
          "title": "Bosch MMB65G5M",
          "p": "18, 540 ֏",
          "url": "https://www.zigzag.am/media/catalog/product/cache/bdbe8598426ada35232bf9926a93af44/6/7/6701410.jpg",
          "sticker_url": "https://www.zigzag.am/media/stickers/hotprice_sticker_en.svg"
        },
        {
          "title": "Beats EP On-Ear ",
          "p": "49,500 ֏",
          "url": "https://www.zigzag.am/media/catalog/product/cache/bdbe8598426ada35232bf9926a93af44/2/9/297532.jpg",
          "sticker_url": "https://www.zigzag.am/media/stickers/hotprice_sticker_en.svg"
        },
        {
          "title": "Realme 7 Pro 8/128Gb",
          "p": "118,530 ֏",
          "url": "https://www.zigzag.am/media/catalog/product/cache/bdbe8598426ada35232bf9926a93af44/3/4/345309.jpeg",
          "sticker_url": "https://www.zigzag.am/media/stickers/hotprice_sticker_en.svg"
        },
        {
          "title": "Hama Perth 15.6",
          "p": "39,850 ֏",
          "url": "https://www.zigzag.am/media/catalog/product/cache/bdbe8598426ada35232bf9926a93af44/4/3/4318571.jpg",
          "sticker_url": "https://www.zigzag.am/media/stickers/hotprice_sticker_en.svg"
        }
      ]
    },
      {
        title: "Bestsellers",
        items: [
          {
            "title": "Panasonic",
            "p": "65,020 ֏",
            "url": "https://www.zigzag.am/media/catalog/product/cache/bdbe8598426ada35232bf9926a93af44/6/8/6861300.jpg",
            "sticker_url": "https://www.zigzag.am/media/stickers/bestseller_sticker_en.svg"
          },
          {
            "title": "Nespresso Indonesia",
            "p": "4,600 ֏",
            "url": "https://www.zigzag.am/media/catalog/product/cache/bdbe8598426ada35232bf9926a93af44/9/7/970236_1.jpg",
            "sticker_url": "https://www.zigzag.am/media/stickers/bestseller_sticker_en.svg"
          },
          {
            "title": "Freedom Light TWS",
            "p": "9,400 ֏",
            "url": "https://www.zigzag.am/media/catalog/product/cache/bdbe8598426ada35232bf9926a93af44/2/9/293243-2.jpg",
            "sticker_url": "https://www.zigzag.am/media/stickers/bestseller_sticker_en.svg"
          },
          {
            "title": "Bosch MMB42G0B",
            "p": "48,400 ֏",
            "url": "https://www.zigzag.am/media/catalog/product/cache/bdbe8598426ada35232bf9926a93af44/6/7/670142_7.jpg",
            "sticker_url": "https://www.zigzag.am/media/stickers/bestseller_sticker_en.svg"
          }
        ]
      },
      {
        title: "New products",
        items: [
          {
            "title": "Belkin Magnetic",
            "p": "60,500 ֏",
            "url": "https://www.zigzag.am/media/catalog/product/cache/bdbe8598426ada35232bf9926a93af44/3/4/343111.png",
            "sticker_url": "https://www.zigzag.am/media/stickers/new_sticker_en.svg"
          },
          {
            "title": "Sven 450 Black",
            "p": "50,700 ֏",
            "url": "https://www.zigzag.am/media/catalog/product/cache/bdbe8598426ada35232bf9926a93af44/1/7/179150-3.png",
            "sticker_url": "https://www.zigzag.am/media/stickers/new_sticker_en.svg"
          },
          {
            "title": "UD 40F5210 ",
            "p": "40,999 ֏",
            "url": "https://www.zigzag.am/media/catalog/product/cache/bdbe8598426ada35232bf9926a93af44/0/1/019950.jpg",
            "sticker_url": "https://www.zigzag.am/media/stickers/new_sticker_en.svg"
          },
          {
            "title": "Bosch MMB65G5M",
            "p": "39,850 ֏",
            "url": "https://www.zigzag.am/media/catalog/product/cache/bdbe8598426ada35232bf9926a93af44/4/3/4318571.jpg",
            "sticker_url": "https://www.zigzag.am/media/stickers/new_sticker_en.svg"
          }
        ]
      }

    ]
}
