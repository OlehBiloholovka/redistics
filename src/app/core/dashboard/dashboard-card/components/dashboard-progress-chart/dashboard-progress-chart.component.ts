import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexStroke, ApexTooltip, ApexXAxis, ApexYAxis, ChartComponent} from 'ng-apexcharts';
import {ProgressData} from '../../progress-data.model';

export interface ChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis[];
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  colors: string[];
}

@Component({
  selector: 'app-dashboard-progress-chart',
  templateUrl: './dashboard-progress-chart.component.html',
  styleUrls: ['./dashboard-progress-chart.component.css']
})
export class DashboardProgressChartComponent implements OnInit, OnChanges {
  @ViewChild('chart') chart: ChartComponent;
  @Input() isChecked: boolean;
  @Input() progressData: ProgressData;


  // @Input() progressChartSeries: ProgressData[];
  @Input() height: number;
  // private chartSeries: ApexAxisChartSeries;
  private chartMin: number[];
  private chartMax: number[];
  public chartOptions: Partial<ChartOptions>;

  constructor() {
  }

  ngOnInit(): void {
    this.setData();
  }

  // private setSeries(): void {
  //   this.chartSeries = this.progressChartSeries.map(value => {
  //     return {
  //       name: value.name[0],
  //       data: this.isChecked ? value.switchedData : value.data
  //     };
  //   });
  // }

  private setMinMax(): void {
    // const maxV: number[] = this.progressChartSeries
    //   .map(value => Math.max(...(this.isChecked ? value.switchedData : value.data)));
    // const minV: number[] = this.progressChartSeries
    //   .map(value => Math.min(...(this.isChecked ? value.switchedData : value.data)));

    this.chartMax = (this.progressData.getData(this.isChecked) as number[][])
      .map(value => Math.max(...value));
    this.chartMin = (this.progressData.getData(this.isChecked) as number[][])
      .map((value, index) => {
        const min = Math.min(...value);
        return min * 2 > this.chartMax[index] ? min * 0.9 : undefined;
      });

    // this.chartMin = minV.map((value, index) => {
    //   const halfMax = maxV[index] * 0.5;
    //   return value > halfMax ? value * 0.9 : undefined;
    // });
    // this.chartMax = maxV;
  }

  private setChartOptions() {
    this.chartOptions = {
      // series: this.chartSeries,
      series: this.progressData.getChartData(this.isChecked),
      chart: {
        height: this.height,
        type: 'area',
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      tooltip: {
        enabled: false
      },
      yaxis: [
        {
          showAlways: false,
          show: false,
          min: this.chartMin[0],
          max: this.chartMax[0]
        },
        {
          opposite: true,
          showAlways: false,
          show: false,
          min: this.chartMin[1],
          max: this.chartMax[1]
        },
        {
          opposite: true,
          showAlways: false,
          show: false,
          min: this.chartMin[2],
          max: this.chartMax[2]
        }
      ],
    };
  }

  private setData() {
    // this.setSeries();
    this.setMinMax();
    this.setChartOptions();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setData();
  }
}
