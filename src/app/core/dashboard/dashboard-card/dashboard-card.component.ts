import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ChartComponent, ApexStroke, ApexTheme
} from 'ng-apexcharts';

export interface ChartOptions {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  stroke: ApexStroke;
  theme: ApexTheme;
}

export interface Employee {
  name: string;
  userCode?: number;
  level: number;
}

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  @Input() userCode!: number;
  @Input() dashboardCardName!: string;
  @Input() radialBarSeries!: number[];
  @Input() dataDate: number;
  @Input() employees: Employee[];
  checkedData: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  rotateCard(dashboardCard: HTMLDivElement) {
    dashboardCard.classList.toggle('rotate-card');
  }
}
