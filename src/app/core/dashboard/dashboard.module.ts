import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {NgApexchartsModule} from 'ng-apexcharts';
import {PprDashboardComponent} from './ppr-dashboard/ppr-dashboard.component';
import {SalaryDashboardComponent} from './salary-dashboard/salary-dashboard.component';
import {IndividualDashboardComponent} from './individual-dashboard/individual-dashboard.component';
import {PartnerDashboardComponent} from './partner-dashboard/partner-dashboard.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {DashboardCardModule} from './dashboard-card/dashboard-card.module';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule} from '@angular/forms';
import { ActivationsDashboardComponent } from './activations-dashboard/activations-dashboard.component';


@NgModule({
    declarations: [DashboardComponent, PprDashboardComponent, SalaryDashboardComponent,
        IndividualDashboardComponent, PartnerDashboardComponent, ActivationsDashboardComponent],
    exports: [
        SalaryDashboardComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        NgApexchartsModule,
        MatGridListModule,
        MatCardModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        MatListModule,
        MatTableModule,
        MatProgressBarModule,
        DashboardCardModule,
        MatSlideToggleModule,
        FormsModule,
    ]
})
export class DashboardModule {
}
