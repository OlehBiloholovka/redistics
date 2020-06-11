import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ApexChart, ApexFill, ApexNonAxisChartSeries, ApexPlotOptions, ApexStroke, ApexTheme, ChartComponent} from 'ng-apexcharts';
import {ProgressData} from '../../progress-data.model';

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
  @Input() progressData: ProgressData;
  // @Input() seriesLabels: string[];
  // @Input() totalLabel: string;
  // radialBarSeries!: number[];
  // radialBarTotalValue: number;
  indicatorChartOptions: Partial<ChartOptions>;

  constructor() {
  }

  ngOnInit(): void {
    // this.setData();
    this.setChartOptions();
  }

  private setChartOptions() {
    this.indicatorChartOptions = {
      // series: this.radialBarSeries,
      series: this.progressData.getData(this.isChecked) as number[],
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
              // label: !!this.progressData.name ? this.progressData.name[0] : this.totalLabel,
              // label: this.progressData.totalLabel || this.progressData.dataLabels[0],
              // formatter: () => this.radialBarTotalValue + '%'
              label: this.progressData.totalLabel || this.progressData.dataLabels[0],
              formatter: () => (this.progressData.totalLabel ?
                this.progressData.getAverageData(this.isChecked) :
                this.progressData.getData(this.isChecked)[0] as number) + '%'
            }
          }
        }
      },
      fill: {
        colors: ['#00E396', '#e7f436', '#FEB019'],
        type: 'gradient',
        gradient: {
          shade: 'light',
          shadeIntensity: 0.5,
          gradientToColors: ['#e7f436', '#FEB019', '#FF4560'],
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
      // labels: !!this.progressData.name ? this.progressData.name : this.seriesLabels
      labels: this.progressData.dataLabels
    };
  }

  // private setData() {
  //   this.setSeries();
  //   this.setTotal();
  //   this.setChartOptions();
  // }
  //
  // private setSeries() {
  //   // this.radialBarSeries = this.isChecked ?
  //   //   (this.progressData.switchedData as number[]) :
  //   //   (this.progressData.data as number[]);
  //   this.radialBarSeries = this.progressData.getData(this.isChecked) as number[];
  // }
  //
  // private setTotal() {
  //   this.radialBarTotalValue = this.progressData.totalLabel ?
  //     this.progressData.getAverageData(this.isChecked) :
  //     this.progressData.getData(this.isChecked)[0] as number;
  // }

  ngOnChanges(changes: SimpleChanges): void {
    // this.setData();
    this.setChartOptions();
  }
}
