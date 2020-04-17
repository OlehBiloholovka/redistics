import {Component, Input, OnInit} from '@angular/core';
import {RegistrationIndicator} from '../../../share/models/registration-indicator.model';
import {SalaryIndicator} from '../../../share/models/salary-indicator.model';
import {ApexAxisChartSeries} from 'ng-apexcharts';
import {ProgressSeries} from './progress-series.model';

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
  @Input() frontDashboardCardName!: string;
  @Input() backDashboardCardName = 'Рейтинг';
  @Input() employees: Employee[];
  @Input() hasBackCard: boolean;
  @Input() salaryIndicators: SalaryIndicator[];
  @Input() userCode: number | string;
  @Input() chartSeries: ApexAxisChartSeries;
  @Input() progressChartSeries: ProgressSeries[];
  @Input() progressSeries: ProgressSeries;
  @Input() toggleName = 'Перевірено';
  @Input() seriesLabels = ['Перевірено', 'Без перевірки'];
  @Input() totalLabel = 'Перевірено';
  @Input() rotate: boolean;
  @Input() checkedData: boolean;
  radialbarLabel = 0;

  constructor() {
  }

  ngOnInit(): void {
    if (this.registrationIndicator) {
      this.setRadialBarSeries();
    }
    this.setDefaultFooterLabel();
  }

  private setRadialBarSeries() {
    const series = [
      Math.round(this.registrationIndicator.calculations.checkedIndicator() * 100),
      Math.round(this.registrationIndicator.calculations.onCheckingIndicator() * 100)
    ];
    this.progressSeries = {data: series, forecastData: series};
  }

  rotateCard(dashboardCard: HTMLDivElement) {
    dashboardCard.classList.toggle('rotate-card');
  }

  setDefaultFooterLabel() {
    if (this.salaryIndicators) {
      this.radialbarLabel = this.salaryIndicators
        .map(value => this.checkedData ? value.checkedValue : value.onCheckingValue)
        .reduce((pV, cV) => pV + cV);
    }
  }

  setFooterLabel(footerLabel: number) {
    this.radialbarLabel = footerLabel;
  }
}
