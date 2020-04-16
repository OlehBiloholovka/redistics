import {Injectable} from '@angular/core';
import {ApexAxisChartSeries} from 'ng-apexcharts';
import {Employee} from '../../core/dashboard/dashboard-card/dashboard-card.component';
import {ActivationIndicator} from '../models/activation-indicator.model';
import {ProgressSeries} from '../../core/dashboard/dashboard-card/progress-series.model';

@Injectable({
  providedIn: 'root'
})
export class ActivationsService {

  constructor() {
  }

  static getForecastValue(forecastSeries: number[], planValue: number) {
    return forecastSeries[forecastSeries.length - 1] / planValue;
  }

  static getFactValue(activationData: number[], planValue: number) {
    return activationData[activationData.length - 1] / planValue;
  }

  static getCalculatedSeries(series: number[]): number[] {
    return series.map((value, index, array) => {
      if (index === 0) {
        return value;
      } else {
        return value - array[index - 1];
      }
    });
  }

  getActivationData(): ApexAxisChartSeries {
    return [
      {
        name: 'Активації',
        data: [31, 40, 28, 51, 42, 109, 100]
      },
      {
        name: '% СП з АП',
        data: [11, 32, 45, 32, 34, 52, 41]
      },
    ];
  }

  getActivationProgressData(): number[] {
    return [34, 67];
  }

  getActivationIndicators(): ActivationIndicator[] {
    const indicators: ActivationIndicator[] = new Array<ActivationIndicator>();
    const i1 = new ActivationIndicator();
    const i2 = new ActivationIndicator();
    const activationData: number[] = [31, 40, 58, 71, 142, 189, 200];
    i1.nameIndicator = 'Активації';
    i1.dateSeries = [];
    i1.series = ActivationsService.getCalculatedSeries(activationData);
    i1.forecastSeries = [350, 380, 400, 403, 412, 398, 401];
    i1.planValue = 400;
    i1.factValue = ActivationsService.getFactValue(activationData, i1.planValue);
    i1.forecastValue = ActivationsService.getForecastValue(i1.forecastSeries, i1.planValue);
    i2.nameIndicator = '% СП з АП';
    i2.series = [11, 32, 45, 32, 34, 52, 41];
    i2.forecastSeries = i2.series;
    i2.planValue = 50;
    i2.factValue = ActivationsService.getFactValue(i2.series, i2.planValue);
    i2.forecastValue = ActivationsService.getForecastValue(i2.forecastSeries, i2.planValue);
    indicators.push(i1, i2);
    return indicators;
  }

  getActivationProgressSeries(): ProgressSeries {
    const series = new ProgressSeries();
    series.data = this.getActivationIndicators().map(value => value.factValue * 100);
    series.forecastData = this.getActivationIndicators().map(value => value.forecastValue * 100);
    return series;
  }

  getActivationEmployeesRank(): Employee[] {
    return [
      {name: 'Hot', checkedLevel: 0.85, onCheckingLevel: 1.05},
      {name: 'Shkvarok', checkedLevel: 0.56, onCheckingLevel: 1.25, userCode: 12345},
      {name: 'Petrivkyi', checkedLevel: 0.32, onCheckingLevel: 0.42},
      {name: 'Petriv', checkedLevel: 0.78, onCheckingLevel: 0.89},
      {name: 'Petrivkyi', checkedLevel: 0.32, onCheckingLevel: 0.42},
      {name: 'Petriv', checkedLevel: 0.78, onCheckingLevel: 0.89},
      {name: 'Petrivkyi', checkedLevel: 0.32, onCheckingLevel: 0.42},
      {name: 'Petriv', checkedLevel: 0.78, onCheckingLevel: 0.89},
      {name: 'Petrivkyi', checkedLevel: 0.32, onCheckingLevel: 0.42},
      {name: 'Petriv', checkedLevel: 0.78, onCheckingLevel: 0.89}
    ];
  }
}
