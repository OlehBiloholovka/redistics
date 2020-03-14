import {Component, Input, OnInit} from '@angular/core';
import {DashboardProgressBar} from './dashboard-progress-bar.model';

@Component({
  selector: 'app-dashboard-progress-bar',
  templateUrl: './dashboard-progress-bar.component.html',
  styleUrls: ['./dashboard-progress-bar.component.css']
})
export class DashboardProgressBarComponent implements OnInit {

  @Input() dashboardProgressBar: DashboardProgressBar;

  constructor() {
  }

  ngOnInit(): void {
  }

}
