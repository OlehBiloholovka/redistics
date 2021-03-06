import {Registration} from '../models/registration.model';

export class RegistrationCounter {
  static toMake(plan: number, fact: number): number {
    return this.isCompleted(plan, fact) ? 0 : plan - fact;
  }
  static isCompleted(plan: number, fact: number): boolean {
    return fact >= plan;
  }
  static isPPR(categoryRDMS: string, PPR: string): boolean {
    return categoryRDMS === 'Спец. розница (GSM)' || this.hasPprContract(PPR);
  }
  static hasPprContract(PPR: string): boolean {
    return PPR === 'Да';
  }
  static hasIndividualPlan(plan: number): boolean {
    return !!plan || plan === 0;
  }
  static isDudOk(registration: Registration): boolean {
    return registration.checkDud === 'Ок';
  }
  static isInActivation(registration: Registration): boolean {
    return registration.rejectReason === 'В работе';
  }
  static maybeDudOk(registration: Registration): boolean {
    return registration.statusForActivation === 'Зарегистрирован' &&
      (registration.checkDud === 'В процессе проверки' || registration.checkDud === 'Не отправлено');
  }
}
