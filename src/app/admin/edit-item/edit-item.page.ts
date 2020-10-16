import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  AlertController,
  NavController,
  ToastController,
} from '@ionic/angular';
import { Item } from 'src/app/item.model';
import { ItemsService } from 'src/app/items.service';

type ItemTypes = Item['type'];

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.page.html',
  styleUrls: ['./edit-item.page.scss'],
})
export class EditItemPage implements OnInit {
  editItemForm: FormGroup;
  productDetailForm: FormGroup;
  cpuFormGroup: FormGroup;
  ramFormGroup: FormGroup;
  mbFormGroup: FormGroup;

  selectedType: ItemTypes;
  item: Item;

  constructor(
    private itemsService: ItemsService,
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    const itemId = this.activatedRoute.snapshot.params.id;
    this.item = this.itemsService.getItem(itemId);
    this.selectedType = this.item.type;

    const { brand, model, images, stock, price, type } = this.item;

    this.editItemForm = new FormGroup({
      brand: new FormControl(brand, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      model: new FormControl(model, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      images: new FormControl(images, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      stock: new FormControl(stock, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      price: new FormControl(price, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      type: new FormControl(type, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
    });

    switch (this.item.type) {
      case 'CPU': {
        const { baseClock, boostClock, core, thread } = this.item;
        this.productDetailForm = new FormGroup({
          baseClock: new FormControl(baseClock, {
            updateOn: 'change',
            validators: [Validators.required],
          }),
          boostClock: new FormControl(boostClock, {
            updateOn: 'change',
            validators: [Validators.required],
          }),
          core: new FormControl(core, {
            updateOn: 'change',
            validators: [Validators.required],
          }),
          thread: new FormControl(thread, {
            updateOn: 'change',
            validators: [Validators.required],
          }),
        });
        break;
      }
      case 'RAM': {
        const { speed, size } = this.item;
        this.productDetailForm = new FormGroup({
          speed: new FormControl(speed, {
            updateOn: 'change',
            validators: [Validators.required],
          }),
          size: new FormControl(size, {
            updateOn: 'change',
            validators: [Validators.required],
          }),
        });
        break;
      }
      case 'MOTHERBOARD': {
        const { chipset, processor } = this.item;
        this.productDetailForm = new FormGroup({
          chipset: new FormControl(chipset, {
            updateOn: 'change',
            validators: this.selectedType === 'MOTHERBOARD' && [
              Validators.required,
            ],
          }),
          processor: new FormControl(processor, {
            updateOn: 'change',
            validators: this.selectedType === 'MOTHERBOARD' && [
              Validators.required,
            ],
          }),
        });
        break;
      }
      default:
        this.productDetailForm = this.editItemForm;
    }
  }

  onSubmit() {
    const { images, ...otherBasicProps } = this.editItemForm.value;
    const finalImages = images.toString().split(',');
    this.itemsService.editItem({
      ...this.item,
      ...otherBasicProps,
      ...this.productDetailForm.value,
      images: finalImages,
    });
    this.showToast();
    this.navCtrl.back();
  }

  async showEditAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Update Item',
      message: 'Are you sure you want to save this current update?',
      buttons: [
        { text: 'Cancel' },
        { text: 'Update', handler: () => this.onSubmit() },
      ],
    });
    await alert.present();
  }

  async showToast() {
    const toast = await this.toastCtrl.create({
      message: `Item is successfully updated.`,
      color: 'secondary',
      duration: 3000,
    });
    toast.present();
  }
}
