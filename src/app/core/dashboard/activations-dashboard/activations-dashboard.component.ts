import {Component, Input, OnInit} from '@angular/core';
import {ApexAxisChartSeries} from 'ng-apexcharts';
import {ActivationsService} from '../../../share/services/activations.service';
import {Employee} from '../dashboard-card/dashboard-card.component';
import {ProgressSeries} from '../dashboard-card/progress-series.model';

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
  chartSeries: ApexAxisChartSeries;
  activationSeries: ProgressSeries[];
  radialBarSeries: number[];
  seriesLabels: string[];
  totalLabel: string;
  employees: Employee[];
  progressSeries: ProgressSeries;

  constructor(private as: ActivationsService) {
    this.toggleName = 'Прогноз';
    this.frontDashboardCardName = 'Активації та АП';
    this.backDashboardCardName = 'Рейтинг ' + this.frontDashboardCardName;
    this.chartSeries = this.as.getActivationData();
    this.activationSeries = this.as.getActivationIndicators().map(value => {
      return {
        name: value.nameIndicator,
        data: value.series,
        forecastData: value.forecastSeries
      };
    });
    this.radialBarSeries = this.as.getActivationProgressData();
    this.progressSeries = this.as.getActivationProgressSeries();
    this.seriesLabels = this.chartSeries.map(series => series.name);
    this.totalLabel = this.seriesLabels[0];
    this.employees = as.getActivationEmployeesRank();
  }

  ngOnInit(): void {
  }

}
