import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {LayoutModule} from '@angular/cdk/layout';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import {UsersComponent} from './users/users.component';


@NgModule({
  declarations: [AdminComponent, SettingsComponent, ProfileComponent, UsersComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatButtonModule,
    MatSlideToggleModule,
    LayoutModule
  ],
  exports: [
    AdminComponent,
  ]
})
export class AdminModule { }
