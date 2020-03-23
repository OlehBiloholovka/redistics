import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, MatSortable} from '@angular/material/sort';
import {Employee} from '../dashboard-card.component';

export interface RankData {
  name: string;
  level: number;
  userCode?: number;
}

@Component({
  selector: 'app-dashboard-rank',
  templateUrl: './dashboard-rank.component.html',
  styleUrls: ['./dashboard-rank.component.css']
})
export class DashboardRankComponent implements OnInit, OnChanges {
  @Input() employees: Employee[];
  @Input() userCode!: number;
  @Input() isChecked: boolean;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  columns: string[] = ['index', 'name', 'progressBar', 'level'];
  rankData: RankData[];
  dataSource: MatTableDataSource<RankData>;

  constructor() {
  }

  ngOnInit(): void {
    this.sort.sort({
        id: 'level',
        start: 'desc'
      } as MatSortable
    );
    this.setRankData();
    this.sortData();
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

  updateRankTableRowColor(row: RankData) {
    if (row.userCode === this.userCode) {
      return 'current-user-rank-row';
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setRankData();
    this.sortData();
  }

  private sortData() {
    this.dataSource.sort = this.sort;
  }

  private setRankData() {
    this.rankData = this.employees.map(value => {
      return {
        name: value.name,
        userCode: value.userCode,
        level: this.isChecked ? value.checkedLevel : value.onCheckingLevel
      };
    });
    this.dataSource = new MatTableDataSource(this.rankData);
  }

}
