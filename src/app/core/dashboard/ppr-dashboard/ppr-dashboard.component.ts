import {Component, OnInit} from '@angular/core';
import {Employee} from '../dashboard-card/dashboard-card.component';

@Component({
  selector: 'app-ppr-dashboard',
  templateUrl: './ppr-dashboard.component.html',
  styleUrls: ['./ppr-dashboard.component.css']
})
export class PprDashboardComponent implements OnInit {
  dashboardCardName: string;
  userCode: number;
  radialBarSeries: number[];
  employees: Employee[];
  dataDate: number;

  constructor() {
    this.dashboardCardName = 'ППР';
    this.dataDate = Date.now();
    this.userCode = 12345;
    this.radialBarSeries = [34, 76];
    this.employees = [
      {name: 'Hot', level: 1.05},
      {name: 'Shkvarok', level: 0.56, userCode: 12345},
      {name: 'Petrivkyi', level: 0.32},
      {name: 'Petriv', level: 0.78}
    ];
  }

  ngOnInit(): void {
  }

}
