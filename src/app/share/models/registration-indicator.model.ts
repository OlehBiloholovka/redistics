import {RegistrationIndicatorCalculation} from './registration-indicator-calculation.model';

export class RegistrationIndicator {
  calculationDate: number;
  codePPD: number;
  namePPD: string;
  codeSupervisor: number;
  nameSupervisor: string;
  nameExpert: string;
  calculations: RegistrationIndicatorCalculation;
  // checkedIndicator: number = this.calculations.checkedShareResultA() + this.calculations.checkedShareResultB();
  // onCheckingIndicator: number = this.calculations.onCheckingShareResultA() + this.calculations.onCheckingShareResultB();
  // checkedIndicator: number = this.calculations.checkedIndicator();
  // onCheckingIndicator: number = this.calculations.onCheckingIndicator();

  constructor(calculation: RegistrationIndicatorCalculation) {
    this.calculations = calculation;
  }
}
