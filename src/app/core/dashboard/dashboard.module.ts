import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {NgApexchartsModule} from 'ng-apexcharts';
import {PprDashboardComponent} from './ppr-dashboard/ppr-dashboard.component';
import {SalaryDashboardComponent} from './salary-dashboard/salary-dashboard.component';
import {IndividualDashboardComponent} from './individual-dashboard/individual-dashboard.component';
import {PartnerDashboardComponent} from './partner-dashboard/partner-dashboard.component';


@NgModule({
  declarations: [DashboardComponent, PprDashboardComponent, SalaryDashboardComponent,
    IndividualDashboardComponent, PartnerDashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgApexchartsModule
  ]
})
export class DashboardModule {
}
