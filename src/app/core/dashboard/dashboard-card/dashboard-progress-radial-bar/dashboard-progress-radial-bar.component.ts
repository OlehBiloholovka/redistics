import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {
  ApexChart,
  ApexFill,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexStroke,
  ApexTheme,
  ChartComponent
} from 'ng-apexcharts';
import {ProgressSeries} from '../progress-series.model';

export interface ChartOptions {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  stroke: ApexStroke;
  theme: ApexTheme;
}

@Component({
  selector: 'app-dashboard-progress-radial-bar',
  templateUrl: './dashboard-progress-radial-bar.component.html',
  styleUrls: ['./dashboard-progress-radial-bar.component.css']
})
export class DashboardProgressRadialBarComponent implements OnInit, OnChanges {
  @ViewChild('chart') chart: ChartComponent;
  @Input() isChecked: boolean;
  @Input() progressSeries: ProgressSeries;
  @Input() seriesLabels: string[];
  @Input() totalLabel: string;
  radialBarSeries!: number[];
  indicatorChartOptions: Partial<ChartOptions>;

  constructor() {
  }

  ngOnInit(): void {
    this.setData();
  }

  private setChartOptions() {
    this.indicatorChartOptions = {
      series: this.radialBarSeries,
      chart: {
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
              label: this.totalLabel,
              formatter: () => this.radialBarSeries[0] + '%'
            }
          }
        }
      },
      fill: {
        colors: ['#00E396', '#e7f436'],
        type: 'gradient',
        gradient: {
          shade: 'light',
          shadeIntensity: 0.5,
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
      labels: this.seriesLabels
    };
  }

  private setData() {
    this.setSeries();
    this.setChartOptions();
  }

  private setSeries() {
    this.radialBarSeries = this.isChecked ? this.progressSeries.forecastData : this.progressSeries.data;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setData();
  }
}
