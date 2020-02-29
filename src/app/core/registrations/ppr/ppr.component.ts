import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';

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

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }

  // getCellStyle(row: any) {
  //   if (RdmsRegistration.isCompleted(row)) {
  //     return {
  //       color: 'white'
  //     };
  //   }
  //   if (RdmsRegistration.mayBeCompleted(row)) {
  //     return {
  //       color: 'blue'
  //     };
  //   }
  //   if (RdmsRegistration.toMakeUnchecked(row) < 3 && row.allCount !== 0) {
  //     return {
  //       color: 'blue'
  //     };
  //   }
  //   if (row.allCount === 0) {
  //     return {
  //       color: 'white'
  //     };
  //   }
  //   return {};
  // }
  // getRowStyle(row: any) {
  //   if (RdmsRegistration.isCompleted(row)) {
  //     return {
  //       'background-color': 'green',
  //     };
  //   }
  //   if (RdmsRegistration.mayBeCompleted(row)) {
  //     return {
  //       'background-color': 'orange',
  //     };
  //   }
  //   if (RdmsRegistration.toMakeUnchecked(row) < 3 && row.allCount !== 0) {
  //     return {
  //       'background-color': 'yellow',
  //     };
  //   }
  //   if (row.allCount === 0) {
  //     return {
  //       'background-color': 'red',
  //     };
  //   }
  //   return {};
  // }

}
