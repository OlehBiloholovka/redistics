import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationsRoutingModule } from './registrations-routing.module';
import { RegistrationsComponent } from './registrations.component';
import { PprComponent } from './ppr/ppr.component';
import { IndividualComponent } from './individual/individual.component';
import { PartnerComponent } from './partner/partner.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [RegistrationsComponent, PprComponent, IndividualComponent, PartnerComponent],
  imports: [
    CommonModule,
    RegistrationsRoutingModule,
    MatButtonModule
  ]
})
export class RegistrationsModule { }
