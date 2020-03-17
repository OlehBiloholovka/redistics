import {Component, Input, OnInit} from '@angular/core';
import {DashboardProgressBar} from '../../dashboard-progress-bar/dashboard-progress-bar.model';

@Component({
  selector: 'app-dashboard-category-progress-board',
  templateUrl: './dashboard-category-progress-board.component.html',
  styleUrls: ['./dashboard-category-progress-board.component.css']
})
export class DashboardCategoryProgressBoardComponent implements OnInit {

  @Input() category: string;
  @Input() planResult: string;
  @Input() dashboardProgressBar: DashboardProgressBar;

  constructor() {
  }

  ngOnInit(): void {
  }

}
