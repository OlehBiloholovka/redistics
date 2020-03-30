import {Component, OnInit} from '@angular/core';
import {ApexNonAxisChartSeries, ApexChart, ApexPlotOptions, ApexStroke} from 'ng-apexcharts';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';
import {RegistrationIndicatorService} from '../../share/services/registration-indicator.service';

export interface ChartOptions {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  stroke: ApexStroke;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  cardName: Subject<string> = new Subject<string>();
  userCode: number | string;

  constructor(private breakpointObserver: BreakpointObserver, private ris: RegistrationIndicatorService) {
    this.userCode = this.ris.getUserCode();
  }

  ngOnInit(): void {
  }

  setCardName(cardName: string) {
    console.log('cardName - ' + cardName);
    this.cardName.next(cardName);
  }
}
