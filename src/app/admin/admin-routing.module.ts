import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage
  },
  {
    path: 'add-contact',
    loadChildren: () => import('./add-contact/add-contact.module').then( m => m.AddContactPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
