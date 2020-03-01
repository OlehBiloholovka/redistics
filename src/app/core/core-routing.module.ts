import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CoreComponent} from './core.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: 'admin',
        loadChildren: () => import(`./admin/admin.module`).then(m => m.AdminModule)
      },
      {
        path: 'registrations',
        loadChildren: () => import(`./registrations/registrations.module`).then(m => m.RegistrationsModule)
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CoreRoutingModule { }