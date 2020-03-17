import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Employee} from '../dashboard-card.component';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, MatSortable} from '@angular/material/sort';

@Component({
  selector: 'app-dashboard-rank',
  templateUrl: './dashboard-rank.component.html',
  styleUrls: ['./dashboard-rank.component.css']
})
export class DashboardRankComponent implements OnInit {
  @Input() employees: Employee[];
  @Input() userCode!: number;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  columns: string[] = ['index', 'name', 'progressBar', 'level'];
  dataSource: MatTableDataSource<Employee>;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.employees);
    this.sort.sort({
        id: 'level',
        start: 'desc'
      } as MatSortable
    );
    this.dataSource.sort = this.sort;
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
