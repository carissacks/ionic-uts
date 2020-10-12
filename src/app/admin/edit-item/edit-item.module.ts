import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditItemPageRoutingModule } from './edit-item-routing.module';

import { EditItemPage } from './edit-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditItemPageRoutingModule
  ],
  declarations: [EditItemPage]
})
export class EditItemPageModule {}
