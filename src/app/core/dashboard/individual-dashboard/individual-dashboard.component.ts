import {Component, OnInit} from '@angular/core';
import {Employee} from '../dashboard-card/dashboard-card.component';
import {RegistrationIndicator} from '../../../share/models/registration-indicator.model';
import {RegistrationIndicatorCalculation} from '../../../share/models/registration-indicator-calculation.model';

@Component({
  selector: 'app-individual-dashboard',
  templateUrl: './individual-dashboard.component.html',
  styleUrls: ['./individual-dashboard.component.css']
})
export class IndividualDashboardComponent implements OnInit {
  dashboardCardName: string;
  // userCode: number;
  // radialBarSeries: number[];
  employees: Employee[];
  // dataDate: number;
  registrationIndicator: RegistrationIndicator;

  constructor() {
    this.dashboardCardName = 'Індивідуальний план';
    // this.dataDate = Date.now() - 200000000;
    // this.userCode = 12345;
    // this.radialBarSeries = [12, 56];
    this.employees = [
      {name: 'Hot', checkedLevel: 0.46, onCheckingLevel: 1.05},
      {name: 'Petriv', checkedLevel: 0.78, onCheckingLevel: 0.8},
      {name: 'Shkvarok', checkedLevel: 0.56, onCheckingLevel: 0.7, userCode: 12345},
      {name: 'Petrivkyi', checkedLevel: 0.32, onCheckingLevel: 0.9}
    ];
  }

  ngOnInit(): void {
    const calculation = new RegistrationIndicatorCalculation();
    calculation.planA = 0.32;
    calculation.planB = 0.15;
    calculation.shareA = 0.8;
    calculation.shareB = 0.2;
    calculation.indicatorCountA = 29;
    calculation.indicatorCountB = 14;
    calculation.checkedIndicatorCountA = 4;
    calculation.checkedIndicatorCountB = 1;
    calculation.onCheckingIndicatorCountA = 16;
    calculation.onCheckingIndicatorCountB = 5;
    this.registrationIndicator = new RegistrationIndicator(calculation);
    this.registrationIndicator.codePPD = 12345;
    this.registrationIndicator.namePPD = 'Shkvarok';
    this.registrationIndicator.codeSupervisor = 123;
    this.registrationIndicator.nameSupervisor = 'Andreichuk';
    this.registrationIndicator.nameExpert = 'Oleh';
    this.registrationIndicator.calculationDate =  Date.now() - 200000000;
    // this.registrationIndicator.calculations = calculation;
  }

}
