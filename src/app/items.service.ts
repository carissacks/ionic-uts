import { Injectable } from '@angular/core';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  private items: Array<Item> = [
    {
      id: 'C1',
      brand: 'Intel',
      model: 'Core i9-10900K',
      images: [
        'https://ecs7.tokopedia.net/img/cache/700/product-1/2020/6/26/7701906/7701906_1c38bb1a-9f2c-4498-b59c-5ec9f51caa85_800_800',
        'https://www.overclockers.co.uk/media/image/thumbnail/CP67XIN_257596_800x800.jpg',
      ],
      stock: 0,
      price: 4880000,
      type: 'CPU',
      baseClock: 3.7,
      boostClock: 5.3,
      core: 10,
      thread: 20,
    },
    {
      id: 'C2',
      brand: 'Intel',
      model: 'Core i7-10700K',
      images: [
        'https://ecs7.tokopedia.net/img/cache/700/product-1/2020/6/22/314325/314325_8a916cfe-0963-49db-9833-870da707b62e_640_640',
        'https://gccgamers.com/pub/media/catalog/product/cache/c9e3f318febfabd638414de350bde737/1/5/1590032365-cm8070104282436.jpg',
      ],
      stock: 3,
      price: 3740000,
      type: 'CPU',
      baseClock: 3.8,
      boostClock: 5.1,
      core: 8,
      thread: 16,
    },
    {
      id: 'R3',
      brand: 'Corsair',
      model: 'Vengeance LED',
      images: [
        'https://cdn.mos.cms.futurecdn.net/SWkrDZbyjj7EsW8mBLhpHT-970-80.jpg.webp',
        'https://images-na.ssl-images-amazon.com/images/I/71na0F2lkdL._AC_SX466_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/71iLLi%2BhbGL._AC_SX466_.jpg',
      ],
      stock: 3,
      price: 1150000,
      type: 'RAM',
      speed: 32000,
      size: 16,
    },
    {
      id: 'R4',
      brand: 'G.Skill',
      model: 'Trident Z RGB',
      images: [
        'https://cdn.mos.cms.futurecdn.net/Vqoha9GFY6krezcWbon7oa-970-80.jpg.webp',
        'https://ecs7.tokopedia.net/img/cache/700/attachment/2019/3/19/155297857433364/155297857433364_5a0d03d4-0dc3-45f0-8531-a717422ce69f.png',
        'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/1/18/192571764/192571764_a26ad167-e4ca-4c37-81fe-f07e0e4b9a07_700_469.jpg',
      ],
      stock: 6,
      price: 4570000,
      type: 'RAM',
      speed: 32000,
      size: 16,
    },
    {
      id: 'M5',
      brand: 'Asus',
      model: 'ROG Maximus XII Extreme',
      images: [
        'https://greatecno.com/142169-large_default/asus-rog-maximus-xii-extreme-1200-d.jpg',
        'https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com//624150_144626_01_front_zoom.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/81UVCaiPIvL._AC_SL1500_.jpg',
      ],
      stock: 6,
      price: 4570000,
      type: 'MOTHERBOARD',
      chipset: 'Intel Z490',
      processor: ['Intel 10th Gen', 'Celeron', 'Pentium Gold'],
    },
    {
      id: 'M6',
      brand: 'Gigabyte',
      model: 'Z390 Aorus Ultra',
      images: [
        'https://cdn.mos.cms.futurecdn.net/et3id7D7RcKkCV8gvQwMqX-970-80.jpg.webp',
        'https://cdn.mos.cms.futurecdn.net/AZmXQvwu96scNsV3y3RBnX-970-80.jpg.webp',
        'https://cdn.mos.cms.futurecdn.net/oT2kqyWvGNJUGLRtXsV9tX-970-80.jpg.webp',
        'https://cdn.mos.cms.futurecdn.net/H4aWoBXsiXFPoeEDe2GGvX-970-80.jpg.webp',
      ],
      stock: 6,
      price: 4570000,
      type: 'MOTHERBOARD',
      chipset: 'Intel Z390',
      processor: [
        'Intel 8th Gen',
        'Intel 9th Gen',
        'Celeron',
        'Pentium Processors',
      ],
    },
    {
      id: 'G7',
      brand: 'NVIDIA',
      model: 'GeForce RTX 3090',
      images: [
        'https://images.hothardware.com/contentimages/newsitem/52934/content/Ampere-3090_3QTR_Back_Left.jpg',
        'https://stockx.imgix.net/products/collectibles/NVIDIA-GeForce-RTX-3090-Graphics-Card--Founders-Edition-Black.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1600706011&w=1000',
      ],
      stock: 5,
      price: 30000000,
      type: 'GPU',
    },
    {
      id: 'G8',
      brand: 'AMD',
      model: 'Radeon RX 5700 XT 50th Anniversary',
      images: [
        'https://cdn.videocardz.com/1/2019/07/AMD-Radeon-RX-5700-XT50-box3.jpg',
        'https://www.amd.com/system/files/2019-06/237107-rx5700xt-gold-gpu-gallery1-1260x709.png',
        'https://www.amd.com/system/files/2019-06/237107-rx5700xt-gold-gpu-gallery2-1260x709.png',
      ],
      stock: 5,
      price: 7000000,
      type: 'GPU',
    },
  ];

  constructor() {}

  getAllItems() {
    return this.items;
  }

  getItem(idKey: string) {
    return this.items.find(({ id }) => id === idKey);
  }

  addItem(item: Item) {
    const id: string = item.type[0] + (this.items.length + 1);
    const objItem: Item = { ...item, id };
    this.items.push(objItem);
  }

  deleteItem(idKey: string) {
    this.items = this.items.filter(({ id }) => id !== idKey);
  }

  editItem(item: Item) {
    const index = this.items.findIndex(({ id }) => id === item.id);
    this.items[index] = item;
  }
}
