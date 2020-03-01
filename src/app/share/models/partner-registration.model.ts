import {Completable} from '../interfaces/completable';
import {RegistrationCounter} from '../classes/registration-counter';
import {Outlet} from './outlet.model';

export class PartnerRegistration extends Outlet implements Completable {
  checkedCount: number;
  plan: number;
  sendCount: number;
  inWorkCount: number;

  isCompleted(): boolean {
    return RegistrationCounter.isCompleted(this.plan, this.checkedCount);
  }

  toMake(): number {
    return RegistrationCounter.toMake(this.plan, this.checkedCount);
  }
}
