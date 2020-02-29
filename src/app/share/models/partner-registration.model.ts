import {CheckedCompletable} from '../classes/checked-completable';
import {applyMixins} from 'rxjs/internal-compatibility';
import {Outlet} from './outlet.model';

export class PartnerRegistration implements Outlet, CheckedCompletable {
  PPR: string;
  addressRDMS: string;
  categoryRDMS: string;
  checkedCount: number;
  codePPD: number;
  codeRDMS: number;
  codeSupervisor: number;
  counterpart: string;
  expert: string;
  nameCompany: string;
  namePPD: string;
  nameRDMS: string;
  nameSupervisor: string;
  typeRDMS: string;
  plan: number;
  sendCount: number;

  isCompleted: () => boolean;
  toMake: () => number;

  constructor() {
    this.plan = 3;
    this.sendCount = 0;
  }
}
applyMixins(PartnerRegistration, [Outlet, CheckedCompletable]);
