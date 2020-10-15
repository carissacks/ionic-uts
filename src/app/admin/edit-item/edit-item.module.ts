import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditItemPageRoutingModule } from './edit-item-routing.module';

import { EditItemPage } from './edit-item.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    EditItemPageRoutingModule,
  ],
  declarations: [EditItemPage],
})
export class EditItemPageModule {}
