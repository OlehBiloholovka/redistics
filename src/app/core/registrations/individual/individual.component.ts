import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {IndividualPlanPartnerRegistration} from '../../../share/models/individual-plan-partner-registration.model';
import {Completable} from '../../../share/interfaces/completable';
import {Styler} from '../../../share/classes/styler';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css']
})
export class IndividualComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  individualPlanPartnerRegistrations: IndividualPlanPartnerRegistration[] = [];
  displayedColumnsHandset: string[] = ['partner', 'typeRDMS', 'sendCount', 'onCheckingCount',
    'checkedCount', 'plan', 'toMake'];
  displayedColumns: string[] = ['codeNamePartner', 'codeNameRDMS', 'addressRDMS', 'typeRDMS', 'namePPD',
    'sendCount', 'onCheckingCount', 'checkedCount', 'plan', 'toMake'];

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    const iReg1 = new IndividualPlanPartnerRegistration();
    iReg1.nameSeller = 'Ivan';
    iReg1.codeMSISDN = 951231212;
    iReg1.categoryRDMS = 'Спец. розница (GSM)';
    iReg1.codeRDMS = 10001;
    iReg1.nameRDMS = 'Vodafone';
    iReg1.typeRDMS = 'AA_4';
    iReg1.plan = 2;
    iReg1.sendCount = 12;
    iReg1.checkedCount = 3;
    iReg1.onCheckingCount = 2;
    const iReg2 = new IndividualPlanPartnerRegistration();
    iReg2.nameSeller = 'Vasia';
    iReg2.codeMSISDN = 951232233;
    iReg2.categoryRDMS = 'Спец. розница (GSM)';
    iReg2.nameRDMS = 'Lifecell';
    iReg2.codeRDMS = 10002;
    iReg2.categoryRDMS = 'Спец. розница (GSM)';
    iReg2.plan = 5;
    iReg2.sendCount = 7;
    iReg2.checkedCount = 2;
    iReg2.onCheckingCount = 6;
    iReg2.typeRDMS = 'AA_4';
    const iReg3 = new IndividualPlanPartnerRegistration();
    iReg3.nameSeller = 'Vasia';
    iReg3.codeMSISDN = 951232233;
    iReg3.categoryRDMS = 'Спец. розница (GSM)';
    iReg3.nameRDMS = 'Kyivstar';
    iReg3.codeRDMS = 10003;
    iReg3.PPR = 'Да';
    iReg3.categoryRDMS = 'Спец. розница (GSM)';
    iReg3.plan = 5;
    iReg3.sendCount = 4;
    iReg3.checkedCount = 0;
    iReg3.onCheckingCount = 0;
    iReg3.typeRDMS = 'AA_4';
    this.individualPlanPartnerRegistrations.push(iReg1, iReg2, iReg3);
  }

  getCellStyle(completable: Completable) {
    return Styler.getCellStyle(completable);
  }
  getRowStyle(completable: Completable) {
    return Styler.getRowStyle(completable);
  }
}
