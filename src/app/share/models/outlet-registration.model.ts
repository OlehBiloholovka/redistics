import {Outlet} from './outlet.model';
import {OnCheckingCompletable} from '../classes/on-checking-completable';
import {applyMixins} from 'rxjs/internal-compatibility';
import {Ppr} from '../classes/ppr';

export class OutletRegistration implements Outlet, OnCheckingCompletable, Ppr {
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
  onCheckingCount: number;
  plan: number;
  sendCount: number;
  typeRDMS: string;

  isCompleted: () => boolean;
  mayBeCompleted: () => boolean;
  toMake: () => number;
  toMakeUnchecked: () => number;
  havePartnerContract: () => boolean;
  isPPR: () => boolean;
}
applyMixins(OutletRegistration, [Outlet, OnCheckingCompletable, Ppr]);
