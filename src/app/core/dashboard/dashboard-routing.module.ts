import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {SalaryDashboardComponent} from './salary-dashboard/salary-dashboard.component';
import {PprDashboardComponent} from './ppr-dashboard/ppr-dashboard.component';
import {IndividualDashboardComponent} from './individual-dashboard/individual-dashboard.component';
import {PartnerDashboardComponent} from './partner-dashboard/partner-dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: SalaryDashboardComponent,
        outlet: 'salaryCard'
      },
      {
        path: '',
        component: PprDashboardComponent,
        outlet: 'pprCard'
      },
      {
        path: '',
        component: IndividualDashboardComponent,
        outlet: 'individualCard'
      },
      {
        path: '',
        component: PartnerDashboardComponent,
        outlet: 'partnerCard'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
