import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardCategoryProgressBoardComponent } from './dashboard-category-progress-board.component';
import {DashboardProgressBarModule} from '../dashboard-progress-bar/dashboard-progress-bar.module';



@NgModule({
  declarations: [DashboardCategoryProgressBoardComponent],
  exports: [
    DashboardCategoryProgressBoardComponent
  ],
  imports: [
    CommonModule,
    DashboardProgressBarModule
  ]
})
export class DashboardCategoryProgressBoardModule { }
