import {Component, OnInit} from '@angular/core';
import {Employee} from '../dashboard-card/dashboard-card.component';

@Component({
  selector: 'app-partner-dashboard',
  templateUrl: './partner-dashboard.component.html',
  styleUrls: ['./partner-dashboard.component.css']
})
export class PartnerDashboardComponent implements OnInit {

  dashboardCardName: string;
  userCode: number;
  radialBarSeries: number[];
  employees: Employee[];

  constructor() {
    this.dashboardCardName = 'Індивідуальний план';
    this.userCode = 12345;
    this.radialBarSeries = [86, 109];
    this.employees = [
      {name: 'Hot', level: 1.05},
      {name: 'Petriv', level: 0.78},
      {name: 'Shkvarok', level: 0.56, userCode: 12345},
      {name: 'Petrivkyi', level: 0.32}
    ];
  }

  ngOnInit(): void {
  }
}
