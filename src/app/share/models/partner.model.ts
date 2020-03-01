import {Outlet} from './outlet.model';

export class Partner extends Outlet {
  codeMSISDN: number;
  headMSISDN: number;
  nameSeller?: string;
  category: string;
  status?: string;
}
