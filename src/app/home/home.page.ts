import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  items: Array<Item>;
  list = true;
  constructor(private itemsService: ItemsService) {}

  ngOnInit() {}

  ionViewWillEnter() {
    const allItems = this.itemsService.getAllItems();
    this.items = allItems.filter(({ stock }) => stock > 0);
  }
}
