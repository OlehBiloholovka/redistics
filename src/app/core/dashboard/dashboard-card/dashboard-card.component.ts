import {Component, Input, OnInit} from '@angular/core';
import {RegistrationIndicator} from '../../../share/models/registration-indicator.model';
import {ProgressData} from './progress-data.model';
import {CardData} from './card-data.model';

export interface Employee {
  name: string;
  userCode?: number;
  checkedLevel: number;
  onCheckingLevel: number;
  checkedAbsoluteLevel?: number;
  onCheckingAbsoluteLevel?: number;
}

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent implements OnInit {

  // DashboardCard variables
  @Input() hasBackCard: boolean;
  @Input() isRotated: boolean;
  @Input() checkedData: boolean;
  @Input() frontDashboardCardName!: string;
  @Input() backDashboardCardName = 'Рейтинг';
  @Input() cardData: CardData;
  calculationDate: number;

  // Chart variables
  // @Input() progressChartData: ProgressData[];
  @Input() chartData: ProgressData;

  // Calculation variables
  @Input() registrationIndicator: RegistrationIndicator;

  // RadialBar variables
  @Input() radialBarData: ProgressData;
  @Input() toggleName = 'Перевірено';
  // @Input() seriesLabels = ['Перевірено', 'Без перевірки'];
  // @Input() totalLabel = 'Перевірено';

  // Circle variables
  // @Input() salaryIndicators: SalaryIndicator[];
  // circleBarData: ProgressData;
  // circleBarLabel = 0;

  // Rank variables
  @Input() showAbsoluteLevelRank: boolean;
  @Input() userCode: number | string;
  // @Input() rankData: Employee[];
  // @Input() rankButtons: string[];
  rButtonIndex = 0;

  constructor() {
  }

  ngOnInit(): void {
    // this.rankData = this.cardData?.rankData;
    // this.calculationDate = this.cardData?.cardDate;
    // this.circleBarData = this.cardData?.circleBarData;
    // if (this.registrationIndicator) {
    //   this.setRadialBarSeries();
    // }
    // this.setDefaultFooterLabel();
  }

  // private setRadialBarSeries() {
  //   const series = [
  //     Math.round(this.registrationIndicator.calculations.checkedIndicator() * 100),
  //     Math.round(this.registrationIndicator.calculations.onCheckingIndicator() * 100)
  //   ];
  //   this.radialBarData = {data: series, switchedData: series};
  // }

  rotateCard(dashboardCard: HTMLDivElement) {
    dashboardCard.classList.toggle('rotate-card');
  }

  // setDefaultFooterLabel() {
  //   // if (this.salaryIndicators) {
  //   //   this.circleBarLabel = this.salaryIndicators
  //   //     .map(value => this.checkedData ? value.checkedValue : value.onCheckingValue)
  //   //     .reduce((pV, cV) => pV + cV);
  //   // }
  // }

  // setCircleBarLabel(circleBarLabel: number) {
  //   this.circleBarLabel = circleBarLabel;
  // }
  onRankButtonClick(i: number) {
    this.rButtonIndex = i;
    this.cardData.rankData = this.cardData.multipleRankData[i];
    this.cardData.cardDate = this.cardData.multipleCardDate[i];
  }
}
