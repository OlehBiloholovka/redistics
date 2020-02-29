import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationsRoutingModule } from './registrations-routing.module';
import { RegistrationsComponent } from './registrations.component';
import { PprComponent } from './ppr/ppr.component';
import { IndividualComponent } from './individual/individual.component';
import { PartnerComponent } from './partner/partner.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [RegistrationsComponent, PprComponent, IndividualComponent, PartnerComponent],
  imports: [
    CommonModule,
    RegistrationsRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatTableModule,
    MatIconModule
  ]
})
export class RegistrationsModule { }
