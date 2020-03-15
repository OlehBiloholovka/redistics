import {Component, Input, OnInit} from '@angular/core';
import {DashboardProgressBar} from '../../dashboard-progress-bar/dashboard-progress-bar.model';

@Component({
  selector: 'app-dashboard-category-share-board',
  templateUrl: './dashboard-category-share-board.component.html',
  styleUrls: ['../dashboard-category-progress-board.component.css']
})
export class DashboardCategoryShareBoardComponent implements OnInit {
  @Input() categoryA: string;
  @Input() categoryB: string;
  @Input() dashboardShareProgressBar: DashboardProgressBar;
  @Input() dashboardResultProgressBar: DashboardProgressBar;

  constructor() { }

  ngOnInit(): void {
  }

}
