import {Partner} from './partner.model';
import {MayBeCompletable} from '../interfaces/may-be-completable';
import {RegistrationCounter} from '../classes/registration-counter';

export class IndividualPlanPartnerRegistration extends Partner implements MayBeCompletable {
  checkedCount: number;
  onCheckingCount: number;
  plan: number;
  sendCount: number;

  isCompleted(): boolean {
    return RegistrationCounter.isCompleted(this.plan, this.checkedCount);
  }

  mayBeCompleted(): boolean {
    return RegistrationCounter.isCompleted(this.plan, this.onCheckingCount);
  }

  toMake(): number {
    return RegistrationCounter.toMake(this.plan, this.checkedCount);
  }

  toMakeUnchecked(): number {
    return RegistrationCounter.toMake(this.plan, this.onCheckingCount);
  }
}
