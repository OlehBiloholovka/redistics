import {RegistrationIndicator} from '../../../../../share/models/registration-indicator.model';
import {DashboardProgressBar} from '../dashboard-progress-bar/dashboard-progress-bar.model';

export class DashboardProgressBarCreator {

  static createCheckedACategoryProgressBar(ri: RegistrationIndicator): DashboardProgressBar {
    return this.createCategoryProgressBar(ri, true, true);
  }

  static createCheckedBCategoryProgressBar(ri: RegistrationIndicator): DashboardProgressBar {
    return this.createCategoryProgressBar(ri, false, true);
  }

  static createOnCheckingACategoryProgressBar(ri: RegistrationIndicator): DashboardProgressBar {
    return this.createCategoryProgressBar(ri, true, false);
  }

  static createOnCheckingBCategoryProgressBar(ri: RegistrationIndicator): DashboardProgressBar {
    return this.createCategoryProgressBar(ri, false, false);
  }

  static createCheckedCategoryShareProgressBar(ri: RegistrationIndicator): DashboardProgressBar {
    return this.createCategoryShareProgressBar(ri, true);
  }

  static createOnCheckingCategoryShareProgressBar(ri: RegistrationIndicator): DashboardProgressBar {
    return this.createCategoryShareProgressBar(ri, false);
  }

  static createCheckedCategoryShareResultProgressBar(ri: RegistrationIndicator): DashboardProgressBar {
    return this.createCategoryShareResultProgressBar(ri, true);
  }

  static createOnCheckingCategoryShareResultProgressBar(ri: RegistrationIndicator): DashboardProgressBar {
    return this.createCategoryShareResultProgressBar(ri, false);
  }

  static createCategoryProgressBar(ri: RegistrationIndicator, isA: boolean, isChecked: boolean): DashboardProgressBar {
    const pb = new DashboardProgressBar();
    const fact: number = isA && isChecked ? ri.calculations.checkedFactA() : isA ?
      ri.calculations.onCheckingFactA() : isChecked ?
        ri.calculations.checkedFactB() : ri.calculations.onCheckingFactB();
    const indicatorCount: number = isA ? ri.calculations.indicatorCountA : ri.calculations.indicatorCountB;
    const factIndicatorCount = isA && isChecked ? ri.calculations.checkedIndicatorCountA : isA ?
      ri.calculations.onCheckingIndicatorCountA : isChecked ?
        ri.calculations.checkedIndicatorCountB : ri.calculations.onCheckingIndicatorCountB;
    const plan: number = isA ? ri.calculations.planA : ri.calculations.planB;

    pb.firstProgressValue = Math.round(fact * 100) + '%';
    pb.suffixValue = indicatorCount;
    pb.firstProgressValueLabel = factIndicatorCount;
    pb.firstUnderProgressValue = 'fact: ' + pb.firstProgressValue;
    pb.middleUnderProgressValue = '/';
    pb.lastUnderProgressValue = 'plan: ' + Math.round(plan * 100) + '%';
    pb.progressBarFontColor = '#fff';
    return pb;
  }

  static createCategoryShareProgressBar(ri: RegistrationIndicator, isChecked: boolean): DashboardProgressBar {
    const pb = new DashboardProgressBar();
    const prefix = isChecked ? ri.calculations.checkedResultA() : ri.calculations.onCheckingResultA();
    const suffix = isChecked ? ri.calculations.checkedResultB() : ri.calculations.onCheckingResultB();
    pb.prefixValue = Math.round(prefix * 100) + '%*';
    pb.suffixValue = '*' + Math.round(suffix * 100) + '%';
    pb.firstProgressValue = Math.round(ri.calculations.shareA * 100) + '%';
    pb.firstProgressValueLabel = pb.firstProgressValue;
    if (ri.calculations.shareB) {
      pb.secondProgressValue = Math.round(ri.calculations.shareB * 100) + '%';
      pb.secondProgressValueLabel = pb.secondProgressValue;
    }
    return pb;
  }

  static createCategoryShareResultProgressBar(ri: RegistrationIndicator, isChecked: boolean): DashboardProgressBar {
    const pb = new DashboardProgressBar();
    const first = isChecked ? ri.calculations.checkedShareResultA() : ri.calculations.onCheckingShareResultA();
    const result = isChecked ? ri.calculations.checkedIndicator() : ri.calculations.onCheckingIndicator();
    pb.firstProgressValue = Math.round(first * 100) + '%';
    pb.firstProgressValueLabel = pb.firstProgressValue;
    if (ri.calculations.shareB) {
      const second = isChecked ? ri.calculations.checkedShareResultB() : ri.calculations.onCheckingShareResultB();
      pb.secondProgressValue = Math.round(second * 100) + '%';
      pb.secondProgressValueLabel = pb.secondProgressValue;
    }
    pb.middleUnderProgressValue = Math.round(result * 100) + '%';
    pb.middleUnderProgressBarFontSize = '1.5';
    return pb;
  }
}
