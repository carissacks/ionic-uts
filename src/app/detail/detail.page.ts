import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/item.model';
import { ItemsService } from 'src/app/items.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  item: Item;
  content = '';
  sliderOptions = { autoplay: true };

  constructor(
    private itemsService: ItemsService,
    private activatedRoute: ActivatedRoute
  ) {}

  capitalize = (text: string) => text[0].toUpperCase() + text.slice(1);

  ngOnInit() {
    const itemId = this.activatedRoute.snapshot.params.id;
    this.item = this.itemsService.getItem(itemId);

    const { id, brand, model, price, stock, images, ...otherProps } = this.item;

    for (const [key, value] of Object.entries(otherProps)) {
      this.content = this.content + '<p>';
      switch (key) {
        case 'baseClock': {
          this.content = this.content + `Base Clock : ${value} GHz`;
          break;
        }
        case 'boostClock': {
          this.content = this.content + `Boost Clock : ${value} GHz`;
          break;
        }
        case 'speed': {
          this.content =
            this.content + `${this.capitalize(key)} : ${value} MHz`;
          break;
        }
        case 'size': {
          this.content = this.content + `${this.capitalize(key)} : ${value} Gb`;
          break;
        }
        default: {
          this.content = this.content + `${this.capitalize(key)} : ${value}`;
        }
      }
      this.content = this.content + '</p>';
    }
  }
}
