import { Injectable } from '@angular/core';
import {Employee} from '../../core/dashboard/dashboard-card/dashboard-card.component';
import {ProgressSeries} from '../../core/dashboard/dashboard-card/progress-series.model';

@Injectable({
  providedIn: 'root'
})
export class SalesIndicatorService {

  constructor() { }

  getSalesEmployeesRank(): Employee[] {
    return [
      {name: 'Hot', onCheckingLevel: 0.85, checkedLevel: 1.05},
      {name: 'Shkvarok', onCheckingLevel: 0.56, checkedLevel: 1.25, userCode: 12345},
      {name: 'Petrivkyi', onCheckingLevel: 0.32, checkedLevel: 0.42},
      {name: 'Petriv', onCheckingLevel: 0.78, checkedLevel: 0.89},
      {name: 'Petrivkyi', onCheckingLevel: 0.32, checkedLevel: 0.42},
      {name: 'Petriv', onCheckingLevel: 0.78, checkedLevel: 0.89},
      {name: 'Petrivkyi', onCheckingLevel: 0.32, checkedLevel: 0.42},
      {name: 'Petriv', onCheckingLevel: 0.78, checkedLevel: 0.89},
      {name: 'Petrivkyi', onCheckingLevel: 0.32, checkedLevel: 0.42},
      {name: 'Petriv', onCheckingLevel: 0.78, checkedLevel: 0.89}
    ];
  }

  getSalesProgressSeries(): ProgressSeries {
    const series = new ProgressSeries();
    series.name = ['СП', 'Скретч', 'ЕП'];
    series.data = [67, 35, 54];
    series.forecastData = [101, 78, 93];
    // series.data = this.getActivationIndicators().map(value => value.factValue * 100);
    // series.forecastData = this.getActivationIndicators().map(value => value.forecastValue * 100);
    return series;
  }

  getSalesChartSeries(): ProgressSeries[] {
    const series1 = new ProgressSeries();
    const series2 = new ProgressSeries();
    const series3 = new ProgressSeries();
    const series = new Array<ProgressSeries>();
    series.push(series1, series2, series3);
    series1.name = ['СП'];
    series1.data = [23, 25, 32, 22];
    series1.forecastData = [100, 105, 111, 105];
    series2.name = ['Скретч'];
    series2.data = [5000, 3000, 4000, 3500];
    series2.forecastData = [105, 89, 94, 93];
    series3.name = ['ЕП'];
    series3.data = [23000, 28000, 32000, 40000];
    series3.forecastData = [75, 79, 84, 99];
    return series;
  }
}
