import {Component, Input, OnInit} from '@angular/core';
import {DashboardCategoryBoard} from '../dashboard-category-board.model';

@Component({
  selector: 'app-dashboard-category-progress-board',
  templateUrl: './dashboard-category-progress-board.component.html',
  styleUrls: ['./dashboard-category-progress-board.component.css']
})
export class DashboardCategoryProgressBoardComponent implements OnInit {

  @Input() dashboardCategoryBoard: DashboardCategoryBoard;

  constructor() {
  }

  ngOnInit(): void {
  }

}
