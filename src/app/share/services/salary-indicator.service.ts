import {Injectable} from '@angular/core';
import {SalaryIndicator} from '../models/salary-indicator.model';
import {Employee} from '../../core/dashboard/dashboard-card/dashboard-card.component';
import {ProgressData} from '../../core/dashboard/dashboard-card/progress-data.model';
import {CardData} from '../../core/dashboard/dashboard-card/card-data.model';

@Injectable({
  providedIn: 'root'
})
export class SalaryIndicatorService {

  constructor() {
  }

  getSalaryIndicatorsOLD(): SalaryIndicator[] {
    const indicators: SalaryIndicator[] = new Array<SalaryIndicator>();
    const i1 = new SalaryIndicator();
    const i2 = new SalaryIndicator();
    const i3 = new SalaryIndicator();
    const i4 = new SalaryIndicator();
    i1.nameIndicator = 'ППР';
    i1.maxValue = 1200;
    i1.checkedValue = 850;
    i1.onCheckingValue = 1000;
    i2.nameIndicator = 'Партнер';
    i2.maxValue = 1200;
    i2.checkedValue = 950;
    i2.onCheckingValue = 1200;
    i3.nameIndicator = 'Активації';
    i3.maxValue = 2400;
    i3.checkedValue = 0;
    i3.onCheckingValue = 0;
    i4.nameIndicator = '% СП з АП';
    i4.maxValue = 1200;
    i4.checkedValue = 0;
    i4.onCheckingValue = 900;
    indicators.push(i1, i2, i3, i4);
    return indicators;
  }

  getSalaryIndicators(): ProgressData {
    const data = new ProgressData();
    data.dataLabels = ['ППР', 'Партнер', 'Активації', '% СП з АП'];
    data.totalLabel = 'Всього';
    data.displayedData = [850, 950, 0, 0];
    data.switchedDisplayedData = [1000, 1200, 0, 900];
    const maxData: number[] = [1200, 1200, 2400, 1200];
    data.data = (data.displayedData as number[])
      .map((value, index) => Math.round(value / maxData[index] * 100));
    data.switchedData = (data.switchedDisplayedData as number[])
      .map((value, index) => Math.round(value / maxData[index] * 100));
    return data;
  }

  getSalaryEmployeesRank(): Employee[] {
    return [
      {name: 'Hot', checkedLevel: 0.85, onCheckingLevel: 1.05, checkedAbsoluteLevel: 4000, onCheckingAbsoluteLevel: 5400},
      {
        name: 'Shkvarok', checkedLevel: 0.56, onCheckingLevel: 1.25, userCode: 12345,
        checkedAbsoluteLevel: 14000, onCheckingAbsoluteLevel: 500400
      },
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

  getSalaryEmployeesData(): CardData {
    const cardData = new CardData();
    cardData.circleBarData = this.getSalaryIndicators();
    cardData.rankData = this.getSalaryEmployeesRank();
    cardData.cardDate = Date.now();
    return cardData;
  }
}
