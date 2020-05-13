import {Component, Input, OnInit} from '@angular/core';
import {ActivationsService} from '../../../share/services/activations.service';
import {CardData} from '../dashboard-card/card-data.model';

@Component({
  selector: 'app-activations-dashboard',
  templateUrl: './activations-dashboard.component.html',
  styleUrls: ['./activations-dashboard.component.css']
})
export class ActivationsDashboardComponent implements OnInit {
  toggleName: string;
  frontDashboardCardName: string;
  backDashboardCardName: string;
  @Input() userCode: number | string;
  // chartSeries: ApexAxisChartSeries;
  // activationSeries: ProgressData[];
  // radialBarSeries: number[];
  // seriesLabels: string[];
  // totalLabel: string;
  // employees: Employee[];
  // activationsIndicators: ProgressData;
  // activationsChartIndicators: ProgressData;
  cardData: CardData;

  constructor(private as: ActivationsService) {
    this.toggleName = 'Прогноз';
    this.frontDashboardCardName = 'Активації та АП';
    this.backDashboardCardName = 'Рейтинг ' + this.frontDashboardCardName;
    // this.employees = this.as.getActivationsEmployeesRank();
    // this.activationsIndicators = this.as.getActivationsIndicators();
    // this.activationsChartIndicators = this.as.getActivationsChartIndicators();
    this.cardData = this.as.getActivationsData();
    // this.chartSeries = this.as.getActivationData();
    // this.activationSeries = this.as.getActivationIndicators().map(value => {
    //   return {
    //     name: [value.nameIndicator],
    //     data: value.series,
    //     switchedData: value.forecastSeries
    //   };
    // });
    // this.radialBarSeries = this.as.getActivationProgressData();
    // this.activationsIndicators = this.as.getActivationProgressSeries();
    // this.seriesLabels = this.chartSeries.map(series => series.name);
    // this.totalLabel = this.seriesLabels[0];
  }

  ngOnInit(): void {
  }

}
