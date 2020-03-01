import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {OutletRegistration} from '../../../share/models/outlet-registration.model';
import {Completable} from '../../../share/interfaces/completable';
import {Styler} from '../../../share/classes/styler';

@Component({
  selector: 'app-ppr',
  templateUrl: './ppr.component.html',
  styleUrls: ['./ppr.component.css']
})
export class PprComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  filteredOutletRegistrations: OutletRegistration[] = [];
  displayedColumnsHandset: string[] = ['RDMS', 'typeRDMS', 'sendCount', 'onCheckingCount',
    'checkedCount', 'plan', 'toMake', 'hasPPRContract'];
  displayedColumns: string[] = ['codeNameRDMS', 'addressRDMS', 'typeRDMS', 'namePPD',
    'sendCount', 'onCheckingCount', 'checkedCount', 'plan', 'toMake', 'hasPPRContract'];

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    const outletRegistration = new OutletRegistration();
    outletRegistration.nameRDMS = 'Vodafone';
    outletRegistration.codeRDMS = 10001;
    outletRegistration.PPR = 'Да';
    outletRegistration.categoryRDMS = 'Спец. розница (GSM)';
    outletRegistration.plan = 5;
    outletRegistration.sendCount = 12;
    outletRegistration.checkedCount = 3;
    outletRegistration.onCheckingCount = 2;
    outletRegistration.typeRDMS = 'AA_4';
    const outletRegistration1 = new OutletRegistration();
    outletRegistration1.nameRDMS = 'Lifecell';
    outletRegistration1.codeRDMS = 10002;
    outletRegistration1.PPR = 'Да';
    outletRegistration1.categoryRDMS = 'Спец. розница (GSM)';
    outletRegistration1.plan = 5;
    outletRegistration1.sendCount = 7;
    outletRegistration1.checkedCount = 2;
    outletRegistration1.onCheckingCount = 6;
    outletRegistration1.typeRDMS = 'AA_4';
    const outletRegistration2 = new OutletRegistration();
    outletRegistration2.nameRDMS = 'Kyivstar';
    outletRegistration2.codeRDMS = 10003;
    outletRegistration2.PPR = 'Да';
    outletRegistration2.categoryRDMS = 'Спец. розница (GSM)';
    outletRegistration2.plan = 5;
    outletRegistration2.sendCount = 4;
    outletRegistration2.checkedCount = 0;
    outletRegistration2.onCheckingCount = 0;
    outletRegistration2.typeRDMS = 'AA_4';
    this.filteredOutletRegistrations.push(outletRegistration, outletRegistration1, outletRegistration2);
  }

  getCellStyle(completable: Completable) {
    return Styler.getCellStyle(completable);
  }
  getRowStyle(completable: Completable) {
    return Styler.getRowStyle(completable);
  }
}
