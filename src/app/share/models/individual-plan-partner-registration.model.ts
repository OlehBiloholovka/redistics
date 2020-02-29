import {OnCheckingCompletable} from '../classes/on-checking-completable';
import {Partner} from './partner.model';
import {applyMixins} from 'rxjs/internal-compatibility';

export class IndividualPlanPartnerRegistration implements Partner, OnCheckingCompletable {
  category: string;
  codeMSISDN: number;
  codePPD: number;
  codeRDMS: number;
  headMSISDN: number;
  plan: number;
  sendCount: number;
  checkedCount: number;
  onCheckingCount: number;

  isCompleted: () => boolean;
  toMake: () => number;
  mayBeCompleted: () => boolean;
  toMakeUnchecked: () => number;

  constructor() {
    this.sendCount = 0;
    this.onCheckingCount = 0;
    this.checkedCount = 0;
  }
}
applyMixins(IndividualPlanPartnerRegistration, [Partner, OnCheckingCompletable]);
