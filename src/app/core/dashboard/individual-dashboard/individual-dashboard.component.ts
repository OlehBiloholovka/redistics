import {Component, OnInit} from '@angular/core';
import {Employee} from '../dashboard-card/dashboard-card.component';

@Component({
  selector: 'app-individual-dashboard',
  templateUrl: './individual-dashboard.component.html',
  styleUrls: ['./individual-dashboard.component.css']
})
export class IndividualDashboardComponent implements OnInit {
  dashboardCardName: string;
  userCode: number;
  radialBarSeries: number[];
  employees: Employee[];

  constructor() {
    this.dashboardCardName = 'Індивідуальний план';
    this.userCode = 12345;
    this.radialBarSeries = [12, 56];
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
