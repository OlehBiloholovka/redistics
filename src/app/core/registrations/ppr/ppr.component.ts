import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {OutletRegistration} from '../../../share/models/outlet-registration.model';

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
    this.filteredOutletRegistrations.push(outletRegistration);
  }

  getCellStyle(outletRegistration: OutletRegistration) {
    if (outletRegistration.isCompleted()) {
      return {
        color: 'white'
      };
    }
    if (outletRegistration.mayBeCompleted()) {
      return {
        color: 'blue'
      };
    }
    if (outletRegistration.toMakeUnchecked() < 3 && outletRegistration.sendCount !== 0) {
      return {
        color: 'blue'
      };
    }
    if (outletRegistration.sendCount === 0) {
      return {
        color: 'white'
      };
    }
    return {};
  }
  getRowStyle(outletRegistration: OutletRegistration) {
    if (outletRegistration.isCompleted()) {
      return {
        'background-color': 'green',
      };
    }
    if (outletRegistration.mayBeCompleted()) {
      return {
        'background-color': 'orange',
      };
    }
    if (outletRegistration.toMakeUnchecked() < 3 && outletRegistration.sendCount !== 0) {
      return {
        'background-color': 'yellow',
      };
    }
    if (outletRegistration.sendCount === 0) {
      return {
        'background-color': 'red',
      };
    }
    return {};
  }
}
