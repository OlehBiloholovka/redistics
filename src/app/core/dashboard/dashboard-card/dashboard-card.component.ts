import {Component, Input, OnInit} from '@angular/core';
import {RegistrationIndicator} from '../../../share/models/registration-indicator.model';

export interface Employee {
  name: string;
  userCode?: number;
  checkedLevel: number;
  onCheckingLevel: number;
}

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent implements OnInit {
  @Input() registrationIndicator: RegistrationIndicator;
  @Input() dashboardCardName!: string;
  @Input() employees: Employee[];
  checkedData: boolean;
  radialBarSeries!: number[];

  constructor() {
  }

  ngOnInit(): void {
    this.radialBarSeries = [
      Math.round(this.registrationIndicator.calculations.checkedIndicator() * 100),
      Math.round(this.registrationIndicator.calculations.onCheckingIndicator() * 100)
    ];
  }

  rotateCard(dashboardCard: HTMLDivElement) {
    dashboardCard.classList.toggle('rotate-card');
  }
}
