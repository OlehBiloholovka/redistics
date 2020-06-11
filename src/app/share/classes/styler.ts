import {Completable} from '../interfaces/completable';
import {OutletRegistration} from '../models/outlet-registration.model';
import {IndividualPlanPartnerRegistration} from '../models/individual-plan-partner-registration.model';
import {Registration} from '../models/registration.model';
import {RegistrationCounter} from './registration-counter';

export class Styler {
  static getCellStyle(completable: Completable) {
    if (completable.isCompleted()) {
      return {
        color: '#e3004d'
      };
    }
    if (completable instanceof OutletRegistration || completable instanceof IndividualPlanPartnerRegistration) {
      if (completable.mayBeCompleted()) {
        return {
          color: '#4336f4'
        };
      }
      if (completable.toMakeUnchecked() < 3 && completable.sendCount !== 0) {
        return {
          color: '#1967fe'
        };
      }
    }
    if (completable.sendCount === 0) {
      return {
        color: 'white'
      };
    }
    return {};
  }
  static getRowStyle(completable: Completable) {
    if (completable.isCompleted()) {
      return {
        'background-color': '#00E396',
      };
    }
    if (completable instanceof OutletRegistration || completable instanceof IndividualPlanPartnerRegistration) {
      if (completable.mayBeCompleted()) {
        return {
          'background-color': '#e7f436',
        };
      }
      if (completable.toMakeUnchecked() < 3 && completable.sendCount !== 0) {
        return {
          'background-color': '#FEB019',
        };
      }
    }
    if (completable.sendCount === 0) {
      return {
        'background-color': '#FF4560',
      };
    }
    return {};
  }
  static getDetailedCellStyle(registration: Registration) {
    if (RegistrationCounter.isDudOk(registration)) {
      return {
        color: 'black'
      };
    }
    if (RegistrationCounter.isInActivation(registration)) {
      return {
        color: 'blue',
      };
    }
    if (RegistrationCounter.maybeDudOk(registration)) {
      return {
        color: 'blue',
      };
    }
    return {
      color: 'white'
    };
  }
  static getDetailedRowStyle(registration: Registration) {
    if (RegistrationCounter.isDudOk(registration)) {
      return {
        'background-color': '#00E396',
      };
    }
    if (RegistrationCounter.isInActivation(registration)) {
      return {
        'background-color': '#FEB019',
      };
    }
    if (RegistrationCounter.maybeDudOk(registration)) {
      return {
        'background-color': '#e7f436',
      };
    }
    return {
      'background-color': '#FF4560',
    };
  }
}
