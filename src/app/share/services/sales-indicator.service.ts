import {Injectable} from '@angular/core';
import {Employee} from '../../core/dashboard/dashboard-card/dashboard-card.component';
import {ProgressData} from '../../core/dashboard/dashboard-card/progress-data.model';
import {CardData} from '../../core/dashboard/dashboard-card/card-data.model';

@Injectable({
  providedIn: 'root'
})
export class SalesIndicatorService {

  constructor() {
  }

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

  getSalesIndicators(): ProgressData {
    const data = new ProgressData();
    data.dataLabels = ['СП', 'Скретч', 'ЕП'];
    data.totalLabel = 'Всього';
    data.data = [67, 35, 54];
    data.switchedData = [101, 78, 93];
    // data.data = this.getActivationIndicators().map(value => value.factValue * 100);
    // data.switchedData = this.getActivationIndicators().map(value => value.forecastValue * 100);
    return data;
  }

  getSalesChartIndicators(): ProgressData {
    const data = new ProgressData();
    data.dataLabels = ['СП', 'Скретч', 'ЕП'];
    data.data = [
      [23, 25, 32, 22],
      [5000, 3000, 4000, 3500],
      [23000, 28000, 32000, 40000]
    ];
    data.switchedData = [
      [100, 105, 111, 105],
      [105, 89, 94, 93],
      [75, 79, 84, 99]
    ];
    return data;
  }

  // getSalesChartSeries(): ProgressData[] {
  //   const series1 = new ProgressData();
  //   const series2 = new ProgressData();
  //   const series3 = new ProgressData();
  //   const series = new Array<ProgressData>();
  //   series.push(series1, series2, series3);
  //   series1.name = ['СП'];
  //   series1.data = [23, 25, 32, 22];
  //   series1.switchedData = [100, 105, 111, 105];
  //   series2.name = ['Скретч'];
  //   series2.data = [5000, 3000, 4000, 3500];
  //   series2.switchedData = [105, 89, 94, 93];
  //   series3.name = ['ЕП'];
  //   series3.data = [23000, 28000, 32000, 40000];
  //   series3.switchedData = [75, 79, 84, 99];
  //   return series;
  // }
  getSalesData(): CardData {
    const cardData = new CardData();
    cardData.cardDate = Date.now();
    cardData.radialBarData = this.getSalesIndicators();
    cardData.chartData = this.getSalesChartIndicators();
    cardData.rankData = this.getSalesEmployeesRank();
    return cardData;
  }
}
