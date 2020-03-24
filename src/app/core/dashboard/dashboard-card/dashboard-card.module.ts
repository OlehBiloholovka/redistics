import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardCardComponent} from './dashboard-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {NgApexchartsModule} from 'ng-apexcharts';
import {DashboardCardCalculationComponent} from './dashboard-card-calculation/dashboard-card-calculation.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {DashboardProgressBarModule} from './modules/dashboard-progress-bar/dashboard-progress-bar.module';
import {DashboardCategoryBoardModule} from './modules/dashboard-category-board/dashboard-category-board.module';
import { DashboardRankComponent } from './dashboard-rank/dashboard-rank.component';
import { DashboardProgressRadialBarComponent } from './dashboard-progress-radial-bar/dashboard-progress-radial-bar.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule} from '@angular/forms';
import {MatSortModule} from '@angular/material/sort';
import { DashboardSalaryRadialBarComponent } from './dashboard-salary-radial-bar/dashboard-salary-radial-bar.component';


@NgModule({
  declarations: [
    DashboardCardComponent,
    DashboardCardCalculationComponent,
    DashboardRankComponent,
    DashboardProgressRadialBarComponent,
    DashboardSalaryRadialBarComponent
  ],
  exports: [
    DashboardCardComponent,
  ],
    imports: [
        CommonModule,
        MatCardModule,
        MatTableModule,
        MatProgressBarModule,
        NgApexchartsModule,
        MatChipsModule,
        MatButtonModule,
        MatIconModule,
        DashboardProgressBarModule,
        DashboardCategoryBoardModule,
        MatSlideToggleModule,
        FormsModule,
        MatSortModule
    ]
})
export class DashboardCardModule {
}
