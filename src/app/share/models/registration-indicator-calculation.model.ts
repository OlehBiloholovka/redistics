export class RegistrationIndicatorCalculation {
  indicatorCountA: number;
  indicatorCountB: number;
  checkedIndicatorCountA: number;
  checkedIndicatorCountB: number;
  onCheckingIndicatorCountA: number;
  onCheckingIndicatorCountB: number;
  planA: number;
  planB: number;
  shareA: number;
  shareB: number;

  checkedFactA(): number {
    return this.checkedIndicatorCountA / this.indicatorCountA;
  }

  checkedFactB(): number {
    return this.checkedIndicatorCountB / this.indicatorCountB;
  }

  onCheckingFactA(): number {
    return this.onCheckingIndicatorCountA / this.indicatorCountA;
  }

  onCheckingFactB(): number {
    return this.onCheckingIndicatorCountB / this.indicatorCountB;
  }

  checkedResultA(): number {
    return (this.checkedFactA() / this.planA) > 1.5 ? 1.5 : (this.checkedFactA() / this.planA);
  }

  checkedResultB(): number {
    if (!this.planB) { return 0; }
    return (this.checkedFactB() / this.planB) > 1.5 ? 1.5 : (this.checkedFactB() / this.planB);
  }

  onCheckingResultA(): number {
    return (this.onCheckingFactA() / this.planA) > 1.5 ? 1.5 : (this.onCheckingFactA() / this.planA);
  }

  onCheckingResultB(): number {
    if (!this.planB) { return 0; }
    return (this.onCheckingFactB() / this.planB) > 1.5 ? 1.5 : (this.onCheckingFactB() / this.planB);
  }

  checkedShareResultA(): number {
    return this.shareA * this.checkedResultA();
  }

  checkedShareResultB(): number {
    return this.shareB * this.checkedResultB();
  }

  onCheckingShareResultA(): number {
    return this.shareA * this.onCheckingResultA();
  }

  onCheckingShareResultB(): number {
    return this.shareB * this.onCheckingResultB();
  }

  checkedIndicator(): number {
    if (this.shareB) {
      return this.checkedShareResultA() + this.checkedShareResultB();
    }
    return this.checkedShareResultA();
  }

  onCheckingIndicator(): number {
    if (this.shareB) {
      return this.onCheckingShareResultA() + this.onCheckingShareResultB();
    }
    return this.onCheckingShareResultA();
  }

  // checkedFactA: number = this.checkedIndicatorCountA / this.indicatorCountA;
  // checkedFactB: number = this.checkedIndicatorCountB / this.indicatorCountB;
  // onCheckingFactA: number = this.onCheckingIndicatorCountA / this.indicatorCountA;
  // onCheckingFactB: number = this.onCheckingIndicatorCountB / this.indicatorCountB;
  // checkedResultA: number = (this.checkedFactA / this.planA) > 1.5 ? 1.5 : (this.checkedFactA / this.planA);
  // checkedResultB: number = (this.checkedFactB / this.planB) > 1.5 ? 1.5 : (this.checkedFactB / this.planB);
  // onCheckingResultA: number = (this.onCheckingFactA / this.planA) > 1.5 ? 1.5 : (this.onCheckingFactA / this.planA);
  // onCheckingResultB: number = (this.onCheckingFactB / this.planB) > 1.5 ? 1.5 : (this.onCheckingFactB / this.planB);
  // checkedShareResultA: number = this.shareA * this.checkedResultA;
  // checkedShareResultB: number = this.shareB * this.checkedResultB;
  // onCheckingShareResultA: number = this.shareA * this.onCheckingResultA;
  // onCheckingShareResultB: number = this.shareB * this.onCheckingResultB;
  // checkedIndicator: number = this.calculations.checkedShareResultA() + this.calculations.checkedShareResultB();
  // onCheckingIndicator: number = this.calculations.onCheckingShareResultA() + this.calculations.onCheckingShareResultB();
}
