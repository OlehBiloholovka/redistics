import {Component, Input, OnInit} from '@angular/core';
import {DashboardCategoryBoard} from '../dashboard-category-board.model';

@Component({
  selector: 'app-dashboard-category-share-board',
  templateUrl: './dashboard-category-share-board.component.html',
  styleUrls: ['../dashboard-category-progress-board/dashboard-category-progress-board.component.css']
})
export class DashboardCategoryShareBoardComponent implements OnInit {
  @Input() dashboardCategoryBoard: DashboardCategoryBoard;

  constructor() { }

  ngOnInit(): void {
  }

}
