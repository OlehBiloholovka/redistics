import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {PartnerRegistration} from '../../../share/models/partner-registration.model';
import {Completable} from '../../../share/interfaces/completable';
import {Styler} from '../../../share/classes/styler';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  filteredPartnerRegistrations: PartnerRegistration[] = [];
  displayedColumnsHandset: string[] = ['RDMS', 'typeRDMS', 'sendCount', 'inWorkCount',
    'checkedCount', 'plan', 'toMake'];
  displayedColumns: string[] = ['codeNameRDMS', 'addressRDMS', 'typeRDMS', 'namePPD',
    'sendCount', 'inWorkCount', 'checkedCount', 'plan', 'toMake'];

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    const partnerRegistration1 = new PartnerRegistration();
    partnerRegistration1.nameRDMS = 'Vodafone';
    partnerRegistration1.codeRDMS = 10001;
    partnerRegistration1.categoryRDMS = 'Спец. розница (GSM)';
    partnerRegistration1.plan = 3;
    partnerRegistration1.sendCount = 12;
    partnerRegistration1.inWorkCount = 1;
    partnerRegistration1.checkedCount = 3;
    partnerRegistration1.typeRDMS = 'AA_4';
    const partnerRegistration2 = new PartnerRegistration();
    partnerRegistration2.nameRDMS = 'Lifecell';
    partnerRegistration2.codeRDMS = 10002;
    partnerRegistration2.categoryRDMS = 'Спец. розница (GSM)';
    partnerRegistration2.plan = 3;
    partnerRegistration2.inWorkCount = 0;
    partnerRegistration2.sendCount = 7;
    partnerRegistration2.checkedCount = 2;
    partnerRegistration2.typeRDMS = 'AA_4';
    const partnerRegistration3 = new PartnerRegistration();
    partnerRegistration3.nameRDMS = 'Kyivstar';
    partnerRegistration3.codeRDMS = 10003;
    partnerRegistration3.categoryRDMS = 'Спец. розница (GSM)';
    partnerRegistration3.plan = 3;
    partnerRegistration3.inWorkCount = 2;
    partnerRegistration3.sendCount = 4;
    partnerRegistration3.checkedCount = 0;
    partnerRegistration3.typeRDMS = 'AA_4';
    this.filteredPartnerRegistrations.push(partnerRegistration1, partnerRegistration2, partnerRegistration3);
  }

  getCellStyle(completable: Completable) {
    return Styler.getCellStyle(completable);
  }
  getRowStyle(completable: Completable) {
    return Styler.getRowStyle(completable);
  }
}
