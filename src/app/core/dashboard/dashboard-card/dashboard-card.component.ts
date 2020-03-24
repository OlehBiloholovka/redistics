import {Component, Input, OnInit} from '@angular/core';
import {RegistrationIndicator} from '../../../share/models/registration-indicator.model';
import {SalaryIndicator} from '../../../share/models/salary-indicator.model';

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
  @Input() hasBakCard: boolean;
  @Input() salaryIndicators: SalaryIndicator[];
  checkedData: boolean;
  radialBarSeries!: number[];
  footerLabel = 0;

  constructor() {
  }

  ngOnInit(): void {
    if (this.registrationIndicator) {
      this.setRadialBarSeries();
    }
    if (this.salaryIndicators) {
      this.setDefaultFooterLabel();
    }
  }

  private setRadialBarSeries() {
    this.radialBarSeries = [
      Math.round(this.registrationIndicator.calculations.checkedIndicator() * 100),
      Math.round(this.registrationIndicator.calculations.onCheckingIndicator() * 100)
    ];
  }

  rotateCard(dashboardCard: HTMLDivElement) {
    dashboardCard.classList.toggle('rotate-card');
  }

  setDefaultFooterLabel() {
    this.footerLabel = this.salaryIndicators
      .map(value => this.checkedData ? value.checkedValue : value.onCheckingValue)
      .reduce((pV, cV) => pV + cV);
  }

  setFooterLabel(footerLabel: number) {
    this.footerLabel = footerLabel;
  }
}
