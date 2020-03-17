import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../dashboard-card.component';

@Component({
  selector: 'app-dashboard-rank',
  templateUrl: './dashboard-rank.component.html',
  styleUrls: ['./dashboard-rank.component.css']
})
export class DashboardRankComponent implements OnInit {
  @Input() employees: Employee[];
  @Input() userCode!: number;
  columns: string[] = ['index', 'name', 'progressBar', 'level'];

  constructor() { }

  ngOnInit(): void {
  }

  updateProgressBarColor(element: number) {
    if (element >= 1) {
      return 'green-progress-bar';
    } else if (element >= 0.66) {
      return 'yellow-progress-bar';
    } else if (element >= 0.33) {
      return 'orange-progress-bar';
    } else {
      return 'red-progress-bar';
    }
  }

  updateRankTableRowColor(row: Employee) {
    if (row.userCode === this.userCode) {
      return 'current-user-rank-row';
    }
  }

}
