import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ItemsService } from 'src/app/items.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {
  addNewContactForm: FormGroup;

  constructor(
    private itemsService: ItemsService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.addNewContactForm = new FormGroup({
      brand: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      model: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      images: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      stock: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      price: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      type: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
    });
  }

  onSubmit() {
    console.log(this.addNewContactForm.value);
    const {
      brand,
      model,
      images,
      stock,
      price,
      type,
    } = this.addNewContactForm.value;

    this.itemsService.addItem({
      id: '0',
      brand,
      model,
      images,
      stock,
      price,
      type,
    });
    this.navCtrl.back();
  }
}