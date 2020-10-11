import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  items: Array<Item>;
  constructor(private itemsService: ItemsService) {}

  ngOnInit() {}
  ionViewWillEnter() {
    this.items = this.itemsService.getAllItems();
  }
}
