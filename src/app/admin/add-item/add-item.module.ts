import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddItemPageRoutingModule } from './add-item-routing.module';

import { AddItemPage } from './add-item.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AddItemPageRoutingModule,
  ],
  declarations: [AddItemPage],
})
export class AddItemPageModule {}
