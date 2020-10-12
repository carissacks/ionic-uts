import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Item } from '../item.model';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  items: Array<Item>;
  constructor(
    private itemsService: ItemsService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {}

  getData() {
    this.items = this.itemsService.getAllItems();
  }
  ionViewWillEnter() {
    this.getData();
  }

  async showToast(name: string) {
    const toast = await this.toastCtrl.create({
      message: `${name} is removed successfully.`,
      color: 'success',
      duration: 3000,
    });
    toast.present();
  }

  deleteItem({ brand, model, id }: Item) {
    this.itemsService.deleteItem(id);
    this.getData();
    this.showToast(`${brand} ${model}`);
  }

  async showDeleteAlert(item: Item) {
    const alert = await this.alertCtrl.create({
      header: 'Delete Item',
      message: 'Are you sure you want to delete this item permanently?',
      buttons: [
        { text: 'Cancel' },
        { text: 'Delete', handler: () => this.deleteItem(item) },
      ],
    });
    await alert.present();
  }
}
