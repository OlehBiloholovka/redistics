import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {MatSort, MatSortable} from '@angular/material/sort';
import {Employee} from '../../dashboard-card.component';
import {MatTableDataSource} from '@angular/material/table';

export interface RankData {
  name: string;
  level: number;
  absoluteLevel?: number;
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
  @Input() showAbsoluteLevel: boolean;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  simpleColumns: string[] = ['index', 'name', 'progressBar', 'level'];
  absoluteColumns: string[] = ['index', 'name', 'absoluteLevel', 'progressBar', 'level'];
  displayedColumns: string[];
  rankData: RankData[];
  dataSource: MatTableDataSource<RankData>;

  constructor() {
  }

  ngOnInit(): void {
    this.displayedColumns = this.showAbsoluteLevel ? this.absoluteColumns : this.simpleColumns;
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
        level: this.isChecked ? value.checkedLevel : value.onCheckingLevel,
        absoluteLevel: this.isChecked ? value.checkedAbsoluteLevel : value.onCheckingAbsoluteLevel
      };
    });
    this.dataSource = new MatTableDataSource(this.rankData);
  }

}
