import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {UsersComponent} from './users/users.component';
import {ProfileComponent} from './profile/profile.component';
import {SettingsComponent} from './settings/settings.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'profile'
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
    ],
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
