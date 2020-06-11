import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardCardComponent} from './dashboard-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {NgApexchartsModule} from 'ng-apexcharts';
import {DashboardCardCalculationComponent} from './components/dashboard-card-calculation/dashboard-card-calculation.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {DashboardProgressBarModule} from './modules/dashboard-progress-bar/dashboard-progress-bar.module';
import {DashboardCategoryBoardModule} from './modules/dashboard-category-board/dashboard-category-board.module';
import {DashboardRankComponent} from './components/dashboard-rank/dashboard-rank.component';
import {DashboardProgressRadialBarComponent} from './components/dashboard-progress-radial-bar/dashboard-progress-radial-bar.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule} from '@angular/forms';
import {MatSortModule} from '@angular/material/sort';
import {DashboardProgressCircleBarComponent} from './components/dashboard-progress-circle-bar/dashboard-progress-circle-bar.component';
import {TeamRankDashboardComponent} from '../team-rank-dashboard/team-rank-dashboard.component';
import {DashboardProgressChartComponent} from './components/dashboard-progress-chart/dashboard-progress-chart.component';
import {MatTableModule} from '@angular/material/table';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    DashboardCardComponent,
    DashboardCardCalculationComponent,
    DashboardRankComponent,
    DashboardProgressRadialBarComponent,
    DashboardProgressCircleBarComponent,
    TeamRankDashboardComponent,
    DashboardProgressChartComponent,
  ],
  exports: [
    DashboardCardComponent,
    TeamRankDashboardComponent,
  ],
    imports: [
        CommonModule,
        MatCardModule,
        MatProgressBarModule,
        NgApexchartsModule,
        MatChipsModule,
        MatButtonModule,
        MatIconModule,
        DashboardProgressBarModule,
        DashboardCategoryBoardModule,
        MatSlideToggleModule,
        FormsModule,
        MatSortModule,
        MatTableModule,
        RouterModule,
    ]
})
export class DashboardCardModule {
}
