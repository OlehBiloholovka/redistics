import {Component, OnInit} from '@angular/core';
import {Employee} from '../dashboard-card/dashboard-card.component';
import {RegistrationIndicator} from '../../../share/models/registration-indicator.model';
import {RegistrationIndicatorCalculation} from '../../../share/models/registration-indicator-calculation.model';

@Component({
  selector: 'app-partner-dashboard',
  templateUrl: './partner-dashboard.component.html',
  styleUrls: ['./partner-dashboard.component.css']
})
export class PartnerDashboardComponent implements OnInit {

  dashboardCardName: string;
  // userCode: number;
  // radialBarSeries: number[];
  employees: Employee[];
  dataDate: number;
  registrationIndicator: RegistrationIndicator;

  constructor() {
    this.dashboardCardName = 'Партнер 3+';
    // this.dataDate = Date.now() - 400000000;
    // this.userCode = 12345;
    // this.radialBarSeries = [86, 109];
    this.employees = [
      {name: 'Hot', checkedLevel: 0.35, onCheckingLevel: 0.54},
      {name: 'Petriv', checkedLevel: 0.28, onCheckingLevel: 0.78},
      {name: 'Shkvarok', checkedLevel: 0.46, onCheckingLevel: 0.52, userCode: 12345},
      {name: 'Petrivkyi', checkedLevel: 0.12, onCheckingLevel: 0.3}
    ];
  }

  ngOnInit(): void {
    const calculation = new RegistrationIndicatorCalculation();
    calculation.planA = 0.8;
    calculation.planB = 0.2;
    calculation.shareA = 0.8;
    calculation.shareB = 0.2;
    calculation.indicatorCountA = 12;
    calculation.indicatorCountB = 94;
    calculation.checkedIndicatorCountA = 6;
    calculation.checkedIndicatorCountB = 3;
    calculation.onCheckingIndicatorCountA = 11;
    calculation.onCheckingIndicatorCountB = 7;
    this.registrationIndicator = new RegistrationIndicator(calculation);
    this.registrationIndicator.codePPD = 12345;
    this.registrationIndicator.namePPD = 'Shkvarok';
    this.registrationIndicator.codeSupervisor = 123;
    this.registrationIndicator.nameSupervisor = 'Andreichuk';
    this.registrationIndicator.nameExpert = 'Oleh';
    this.registrationIndicator.calculationDate =  Date.now() - 400000000;
    // this.registrationIndicator.calculations = calculation;
  }
}
