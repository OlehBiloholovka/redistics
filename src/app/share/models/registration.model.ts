import {Partner} from './partner.model';

export class Registration extends Partner {
  registeredMSISDN: number;
  registrationDate: string;
  activationDate: string;
  tariffId: string;
  statusForActivation: string;
  rejectReason: string;
  refill: number;
  rechargeDate: string;
  checkDud: string;
  nonConfirmationReason: string;
  checkDateDud: string;
}
