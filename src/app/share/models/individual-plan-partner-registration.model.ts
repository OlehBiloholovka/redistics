import {Partner} from './partner.model';
import {MayBeCompletable} from '../interfaces/may-be-completable';
import {RegistrationCounter} from '../classes/registration-counter';
import {HasIndividualPlan} from '../interfaces/has-individual-plan';

export class IndividualPlanPartnerRegistration extends Partner implements MayBeCompletable, HasIndividualPlan {
  checkedCount: number;
  onCheckingCount: number;
  plan: number;
  sendCount: number;
  inWorkCount: number;

  isCompleted(): boolean {
    return RegistrationCounter.isCompleted(this.plan, this.checkedCount);
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

  hasIndividualPlan(): boolean {
    return RegistrationCounter.hasIndividualPlan(this.plan);
  }
}
