import { Injectable } from '@angular/core';
import {RegistrationIndicator} from '../models/registration-indicator.model';
import {RegistrationIndicatorCalculation} from '../models/registration-indicator-calculation.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationIndicatorService {

  constructor() { }

  getPprRegistrationIndicator(): RegistrationIndicator {
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
    const registrationIndicator = new RegistrationIndicator(calculation);
    // this.registrationIndicator.calculations = calculation;
    registrationIndicator.codePPD = 12345;
    registrationIndicator.namePPD = 'Shkvarok';
    registrationIndicator.codeSupervisor = 123;
    registrationIndicator.nameSupervisor = 'Andreichuk';
    registrationIndicator.nameExpert = 'Oleh';
    registrationIndicator.calculationDate = Date.now();
    return registrationIndicator;
  }

  getPartnerRegistrationIndicator(): RegistrationIndicator {

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
    const registrationIndicator = new RegistrationIndicator(calculation);
    registrationIndicator.codePPD = 12345;
    registrationIndicator.namePPD = 'Shkvarok';
    registrationIndicator.codeSupervisor = 123;
    registrationIndicator.nameSupervisor = 'Andreichuk';
    registrationIndicator.nameExpert = 'Oleh';
    registrationIndicator.calculationDate =  Date.now() - 400000000;
    return registrationIndicator;
  }

  getIndividualRegistrationIndicator(): RegistrationIndicator {
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
    const registrationIndicator = new RegistrationIndicator(calculation);
    registrationIndicator.codePPD = 12345;
    registrationIndicator.namePPD = 'Shkvarok';
    registrationIndicator.codeSupervisor = 123;
    registrationIndicator.nameSupervisor = 'Andreichuk';
    registrationIndicator.nameExpert = 'Oleh';
    registrationIndicator.calculationDate =  Date.now() - 200000000;
    return registrationIndicator;

  }
}
