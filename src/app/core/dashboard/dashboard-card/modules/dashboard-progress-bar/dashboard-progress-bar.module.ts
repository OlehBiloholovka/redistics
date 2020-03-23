import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardProgressBarComponent } from './dashboard-progress-bar.component';



@NgModule({
  declarations: [DashboardProgressBarComponent],
  exports: [
    DashboardProgressBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardProgressBarModule { }
