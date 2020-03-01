import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {Styler} from '../../../share/classes/styler';
import {Registration} from '../../../share/models/registration.model';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.css']
})
export class DetailedComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  registrations: Registration[] = [];
  displayedColumnsHandset: string[] = ['partner', 'typeRDMS', 'registeredMSISDN', 'dates',
    'refill', 'activationStatus', 'checkDud'];
  displayedColumns: string[] = ['codeNamePartner', 'outlet', 'typeRDMS', 'namePPD',
    'registeredMSISDN', 'dates', 'refill', 'activationStatus', 'checkDud'];
  filteredRegistrations = new MatTableDataSource(this.registrations);

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    const registration1 = new Registration();
    registration1.namePPD = 'Петрівський Юрій Петрович';
    registration1.checkDud = 'Ок';
    registration1.addressRDMS = 'Вашкiвці Соборна вул. 11';
    registration1.registeredMSISDN = 997770055;
    registration1.registrationDate = '2/2/20 13:48';
    registration1.activationDate = '2/1/20 10:38';
    registration1.tariffId = '4911 - Vodafone SuperNet Pro-1';
    registration1.statusForActivation = 'Зарегистрирован';
    registration1.rejectReason = 'Успешно';
    registration1.refill = 70;
    registration1.rechargeDate = '2/1/20 10:38';
    registration1.nameSeller = 'Архилюк Марина Василівна';
    registration1.codeMSISDN = 951231212;
    registration1.categoryRDMS = 'Спец. розница (GSM)';
    registration1.codeRDMS = 10001;
    registration1.nameRDMS = 'Vodafone';
    registration1.typeRDMS = 'AA_4';
    registration1.nonConfirmationReason = 'Баллы не предусмотрены';
    registration1.checkDateDud = '2/13/20 18:10';
    this.registrations.push(registration1);
  }

  getCellStyle(registration: Registration) {
    return Styler.getDetailedCellStyle(registration);
  }
  getRowStyle(registration: Registration) {
    return Styler.getDetailedRowStyle(registration);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filteredRegistrations.filter = filterValue.trim().toLowerCase();
  }
}
