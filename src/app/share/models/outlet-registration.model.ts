import {Outlet} from './outlet.model';
import {MayBeCompletable} from '../interfaces/may-be-completable';
import {HasPpr} from '../interfaces/has-ppr';
import {RegistrationCounter} from '../classes/registration-counter';

export class OutletRegistration extends Outlet implements MayBeCompletable, HasPpr {
  checkedCount: number;
  onCheckingCount: number;
  plan: number;
  sendCount: number;
  inWorkCount: number;

  hasPprContract(): boolean {
    return RegistrationCounter.hasPprContract(this.PPR);
  }

  isCompleted(): boolean {
    return RegistrationCounter.isCompleted(this.plan, this.checkedCount);
  }

  isPPR(): boolean {
    return RegistrationCounter.isPPR(this.categoryRDMS, this.PPR);
  }

  mayBeCompleted(): boolean {
    return RegistrationCounter.isCompleted(this.plan, this.onCheckingCount + this.checkedCount);
  }

  toMake(): number {
    return RegistrationCounter.toMake(this.plan, this.checkedCount);
  }

  toMakeUnchecked(): number {
    return RegistrationCounter.toMake(this.plan, this.onCheckingCount + this.checkedCount);
  }
}
