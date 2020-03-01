import {Completable} from '../interfaces/completable';
import {OutletRegistration} from '../models/outlet-registration.model';
import {IndividualPlanPartnerRegistration} from '../models/individual-plan-partner-registration.model';
import {Registration} from '../models/registration.model';
import {RegistrationCounter} from './registration-counter';

export class Styler {
  static getCellStyle(completable: Completable) {
    if (completable.isCompleted()) {
      return {
        color: 'white'
      };
    }
    if (completable instanceof OutletRegistration || completable instanceof IndividualPlanPartnerRegistration) {
      if (completable.mayBeCompleted()) {
        return {
          color: 'blue'
        };
      }
      if (completable.toMakeUnchecked() < 3 && completable.sendCount !== 0) {
        return {
          color: 'blue'
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
        'background-color': 'green',
      };
    }
    if (completable instanceof OutletRegistration || completable instanceof IndividualPlanPartnerRegistration) {
      if (completable.mayBeCompleted()) {
        return {
          'background-color': 'orange',
        };
      }
      if (completable.toMakeUnchecked() < 3 && completable.sendCount !== 0) {
        return {
          'background-color': 'yellow',
        };
      }
    }
    if (completable.sendCount === 0) {
      return {
        'background-color': 'red',
      };
    }
    return {};
  }
  static getDetailedCellStyle(registration: Registration) {
    if (RegistrationCounter.isDudOk(registration)) {
      return {
        color: 'white'
      };
    }
    if (RegistrationCounter.isInActivation(registration)) {
      return {
        'background-color': 'blue',
      };
    }
    if (RegistrationCounter.maybeDudOk(registration)) {
      return {
        'background-color': 'blue',
      };
    }
    return {
      color: 'white'
    };
  }
  static getDetailedRowStyle(registration: Registration) {
    if (RegistrationCounter.isDudOk(registration)) {
      return {
        'background-color': 'green',
      };
    }
    if (RegistrationCounter.isInActivation(registration)) {
      return {
        'background-color': 'yellow',
      };
    }
    if (RegistrationCounter.maybeDudOk(registration)) {
      return {
        'background-color': 'orange',
      };
    }
    return {
      'background-color': 'red',
    };
  }
}
