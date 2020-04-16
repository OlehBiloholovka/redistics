import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {
  ApexAxisChartSeries,
  ChartComponent,
  ApexChart,
  ApexXAxis,
  ApexStroke,
  ApexTooltip,
  ApexDataLabels,
  ApexYAxis
} from 'ng-apexcharts';
import {ProgressSeries} from '../progress-series.model';

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
  @Input() progressChartSeries: ProgressSeries[];
  @Input() height: number;
  private chartSeries: ApexAxisChartSeries;
  private chartMin: number[];
  private chartMax: number[];
  public chartOptions: Partial<ChartOptions>;

  constructor() {
  }

  ngOnInit(): void {
    this.setData();
  }

  private setSeries(): void {
    this.chartSeries = this.progressChartSeries.map(value => {
      return {
        name: value.name,
        data: this.isChecked ? value.forecastData : value.data
      };
    });
  }

  private setMinMax(): void {
    const maxV: number[] = this.progressChartSeries
      .map(value => Math.max(...(this.isChecked ? value.forecastData : value.data)));
    const minV: number[] = this.progressChartSeries
      .map(value => Math.min(...(this.isChecked ? value.forecastData : value.data)));
    this.chartMin = minV.map((value, index) => {
      const halfMax = maxV[index] * 0.5;
      return value > halfMax ? value * 0.9 : undefined;
    });
    this.chartMax = maxV;
  }

  private setChartOptions() {
    this.chartOptions = {
      series: this.chartSeries,
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
        }
      ],
    };
  }

  private setData() {
    this.setSeries();
    this.setMinMax();
    this.setChartOptions();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setData();
  }
}
