import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Item } from 'src/app/item.model';
import { ItemsService } from 'src/app/items.service';

type ItemTypes = Item['type'];
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {
  addNewItemForm: FormGroup;
  productDetailForm: FormGroup;
  cpuFormGroup: FormGroup;
  ramFormGroup: FormGroup;
  mbFormGroup: FormGroup;

  types: Array<ItemTypes> = ['CPU', 'GPU', 'MOTHERBOARD', 'RAM'];
  selectedType: ItemTypes = 'GPU';

  constructor(
    private itemsService: ItemsService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.addNewItemForm = new FormGroup({
      brand: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      model: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      images: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      stock: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      price: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      type: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
    });

    this.cpuFormGroup = new FormGroup({
      baseClock: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      boostClock: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      core: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      thread: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
    });

    this.ramFormGroup = new FormGroup({
      speed: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      size: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
    });

    this.mbFormGroup = new FormGroup({
      chipset: new FormControl(null, {
        updateOn: 'change',
        validators: this.selectedType === 'MOTHERBOARD' && [
          Validators.required,
        ],
      }),
      processor: new FormControl(null, {
        updateOn: 'change',
        validators: this.selectedType === 'MOTHERBOARD' && [
          Validators.required,
        ],
      }),
    });

    this.addNewItemForm.get('type').valueChanges.subscribe((selectedValue) => {
      this.selectedType = selectedValue;
      switch (this.selectedType) {
        case 'CPU': {
          this.productDetailForm = this.cpuFormGroup;
          break;
        }
        case 'RAM': {
          this.productDetailForm = this.ramFormGroup;
          break;
        }
        case 'MOTHERBOARD': {
          this.productDetailForm = this.mbFormGroup;
          break;
        }
        default:
          this.productDetailForm = this.addNewItemForm;
      }
    });
  }

  onSubmit() {
    const { images, ...otherBasicProps } = this.addNewItemForm.value;
    this.itemsService.addItem({
      ...otherBasicProps,
      ...this.productDetailForm.value,
      id: '0',
      images: images.split(','),
    });
    this.navCtrl.back();
  }
}
