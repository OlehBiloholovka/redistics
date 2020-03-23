import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardCategoryProgressBoardComponent } from './dashboard-category-progress-board/dashboard-category-progress-board.component';
import {DashboardProgressBarModule} from '../dashboard-progress-bar/dashboard-progress-bar.module';
import { DashboardCategoryShareBoardComponent } from './dashboard-category-share-board/dashboard-category-share-board.component';


@NgModule({
  declarations: [DashboardCategoryProgressBoardComponent, DashboardCategoryShareBoardComponent],
  exports: [
    DashboardCategoryProgressBoardComponent,
    DashboardCategoryShareBoardComponent
  ],
  imports: [
    CommonModule,
    DashboardProgressBarModule
  ]
})
export class DashboardCategoryBoardModule { }
