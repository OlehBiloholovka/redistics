import { Injectable } from '@angular/core';
import {SalaryIndicator} from '../models/salary-indicator.model';
import {Employee} from '../../core/dashboard/dashboard-card/dashboard-card.component';

@Injectable({
  providedIn: 'root'
})
export class SalaryIndicatorService {

  constructor() { }

  getSalaryIndicators(): SalaryIndicator[] {
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

  getSalaryEmployeesRank(): Employee[] {
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