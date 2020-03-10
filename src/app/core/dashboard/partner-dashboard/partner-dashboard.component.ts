import {Component, OnInit, ViewChild} from '@angular/core';
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
  selector: 'app-partner-dashboard',
  templateUrl: './partner-dashboard.component.html',
  styleUrls: ['./partner-dashboard.component.css']
})
export class PartnerDashboardComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public indicatorChartOptions: Partial<ChartOptions>;
  employees: Employee[] = [
    {name: 'Hot', level: 1.05},
    {name: 'Petriv', level: 0.78},
    {name: 'Shkvarok', level: 0.56, userCode: 12345},
    {name: 'Petrivkyi', level: 0.32}
  ];
  columns: string[] = ['index', 'name', 'progressBar', 'level'];
  userCode: number;

  constructor() {
    this.indicatorChartOptions = {
      series: [100, 100],
      chart: {
        height: 300,
        type: 'radialBar',
        offsetY: -20
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
              formatter: () => '83%'
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
    this.userCode = 12345;
  }

  ngOnInit(): void {
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
}
