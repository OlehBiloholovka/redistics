import {Component, OnInit} from '@angular/core';
import {Employee} from '../dashboard-card/dashboard-card.component';
import {RegistrationIndicator} from '../../../share/models/registration-indicator.model';
import {RegistrationIndicatorCalculation} from '../../../share/models/registration-indicator-calculation.model';

@Component({
  selector: 'app-ppr-dashboard',
  templateUrl: './ppr-dashboard.component.html',
  styleUrls: ['./ppr-dashboard.component.css']
})
export class PprDashboardComponent implements OnInit {
  dashboardCardName: string;
  employees: Employee[];
  registrationIndicator: RegistrationIndicator;

  constructor() {
    this.dashboardCardName = 'ППР';
    // this.dataDate = Date.now();
    // this.userCode = 12345;
    // this.radialBarSeries = [34, 76];
    this.employees = [
      {name: 'Hot', checkedLevel: 0.85, onCheckingLevel: 1.05},
      {name: 'Shkvarok', checkedLevel: 0.56, onCheckingLevel: 1.25, userCode: 12345},
      {name: 'Petrivkyi', checkedLevel: 0.32, onCheckingLevel: 0.42},
      {name: 'Petriv', checkedLevel: 0.78, onCheckingLevel: 0.89}
    ];

    // const calculation = new RegistrationIndicatorCalculation();
    // calculation.planA = 0.65;
    // calculation.planB = 0;
    // calculation.shareA = 1;
    // calculation.indicatorCountA = 12;
    // calculation.indicatorCountB = 4;
    // calculation.checkedIndicatorCountA = 3;
    // calculation.checkedIndicatorCountB = 1;
    // calculation.onCheckingIndicatorCountA = 9;
    // calculation.onCheckingIndicatorCountB = 2;
    // console.log(calculation.checkedShareResultA() + ' - result');
    // this.registrationIndicator = new RegistrationIndicator(calculation);
    // // this.registrationIndicator.calculations = calculation;
    // this.registrationIndicator.codePPD = 12345;
    // this.registrationIndicator.namePPD = 'Shkvarok';
    // this.registrationIndicator.codeSupervisor = 123;
    // this.registrationIndicator.nameSupervisor = 'Andreichuk';
    // this.registrationIndicator.nameExpert = 'Oleh';
    // this.registrationIndicator.calculationDate = Date.now();
  }

  ngOnInit(): void {
    //
    const calculation = new RegistrationIndicatorCalculation();
    calculation.planA = 0.65;
    calculation.planB = 0;
    calculation.shareA = 1;
    calculation.indicatorCountA = 12;
    calculation.indicatorCountB = 4;
    calculation.checkedIndicatorCountA = 3;
    calculation.checkedIndicatorCountB = 1;
    calculation.onCheckingIndicatorCountA = 12;
    calculation.onCheckingIndicatorCountB = 2;
    this.registrationIndicator = new RegistrationIndicator(calculation);
    // this.registrationIndicator.calculations = calculation;
    this.registrationIndicator.codePPD = 12345;
    this.registrationIndicator.namePPD = 'Shkvarok';
    this.registrationIndicator.codeSupervisor = 123;
    this.registrationIndicator.nameSupervisor = 'Andreichuk';
    this.registrationIndicator.nameExpert = 'Oleh';
    this.registrationIndicator.calculationDate = Date.now();
  }

}
