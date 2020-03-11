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
  indicatorChartOptions: Partial<ChartOptions>;
  columns: string[] = ['index', 'name', 'progressBar', 'level'];

  constructor() {
  }

  ngOnInit(): void {
    this.indicatorChartOptions = {
      series: this.radialBarSeries,
      chart: {
        // width: 400,
        height: 300,
        type: 'radialBar',
        offsetY: -20,
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          dataLabels: {
            name: {
              // show: false
              fontSize: '16px',
              color: '#008FFB',
              offsetY: 4
            },
            value: {
              offsetY: -38,
              fontSize: '22px'
            },
            total: {
              fontSize: '20px',
              show: true,
              color: '#FF4560',
              label: 'Перевірено',
              formatter: () => this.radialBarSeries[0] + '%'
            }
          }
        }
      },
      fill: {
        // colors: ['#9C27B0', '#F44336'],
        colors: ['#00E396', '#e7f436'],
        type: 'gradient',
        gradient: {
          shade: 'light',
          shadeIntensity: 0.5,
          // gradientToColors: ['#E91E63', '#ffea00'],
          gradientToColors: ['#e7f436', '#FEB019'],
          inverseColors: true,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [
            0, 50, 100
          ]
        }
      },
      stroke: {
        lineCap: 'round',
      },
      labels: ['Перевірено', 'Без перевірки']
    };
  }

  updateProgressBarColor(element: number) {
    if (element >= 1) {
      return 'green-progress-bar';
    } else if (element >= 0.66) {
      return 'yellow-progress-bar';
    } else if (element >= 0.33) {
      return 'orange-progress-bar';
    } else {
      return 'red-progress-bar';
    }
  }

  updateRankTableRowColor(row: Employee) {
    if (row.userCode === this.userCode) {
      return 'current-user-rank-row';
    }
  }

  rotateCard(dashboardCard: HTMLDivElement) {
    dashboardCard.classList.toggle('rotate-card');
  }
}
