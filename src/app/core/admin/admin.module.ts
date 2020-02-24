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
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [AdminComponent, SettingsComponent, ProfileComponent, UsersComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatButtonModule,
    MatSlideToggleModule,
    LayoutModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  exports: [
    AdminComponent,
  ]
})
export class AdminModule { }
