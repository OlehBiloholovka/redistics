import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationsComponent} from './registrations.component';
import {PprComponent} from './ppr/ppr.component';
import {IndividualComponent} from './individual/individual.component';
import {PartnerComponent} from './partner/partner.component';


const routes: Routes = [
  {
    path: '',
    component: RegistrationsComponent,
    children: [
      {
        path: '',
        redirectTo: 'ppr'
      },
      {
        path: 'ppr',
        component: PprComponent,
      },
      {
        path: 'individual',
        component: IndividualComponent,
      },
      {
        path: 'partner',
        component: PartnerComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationsRoutingModule { }
