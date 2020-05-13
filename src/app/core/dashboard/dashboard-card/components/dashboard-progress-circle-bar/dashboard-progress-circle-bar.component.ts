import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ChartOptions} from '../../../dashboard.component';
import {ProgressData} from '../../progress-data.model';

@Component({
  selector: 'app-dashboard-progress-circle-bar',
  templateUrl: './dashboard-progress-circle-bar.component.html',
  styleUrls: ['./dashboard-progress-circle-bar.component.css']
})
export class DashboardProgressCircleBarComponent implements OnInit, OnChanges {
  @Input() isChecked: boolean;
  @Input() progressData: ProgressData;
  // @Input() salaryIndicators: SalaryIndicator[];
  @Output() mouseEvent = new EventEmitter();
  public chartOptions: Partial<ChartOptions>;
  circleBarLabel: number;
  // chartSeries: number[];
  // chartValues: number[];
  // chartLabels: string[];
  // salaryAverage: number;
  // salaryAmount: number;

  constructor() {
  }

  ngOnInit(): void {
    this.setData();
    // this.setChartOptions();
  }

  private setChartOptions() {
    this.chartOptions = {
      // series: this.chartSeries,
      series: this.progressData.getData(this.isChecked) as number[],
      chart: {
        height: 300,
        type: 'radialBar',
        events: {
          dataPointMouseEnter: (e: any, chart?: any, options?: any) => {
            // this.mouseEvent.emit(this.chartValues[options.dataPointIndex]);
            // this.circleBarLabel = this.progressData
            //   .getDisplayedData(this.isChecked)[options.dataPointIndex] as number;
            this.setCircleBarLabel(options.dataPointIndex);
            this.mouseEvent.emit(this.progressData.getDisplayedData(this.isChecked)[options.dataPointIndex]);
          },
          dataPointMouseLeave: () => {
            // this.mouseEvent.emit(this.salaryAmount);
            this.setCircleBarLabel();
            // this.circleBarLabel = this.progressData.getTotalDisplayedData(this.isChecked);
            this.mouseEvent.emit(this.progressData.getTotalDisplayedData(this.isChecked));
          }
        }
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '1.5em',
            },
            value: {
              fontSize: '1.5em',
              offsetY: -45
            },
            total: {
              fontSize: '1.5em',
              show: true,
              // label: 'Всього',
              // formatter: () => this.salaryAverage + '%'
              label: this.progressData.totalLabel || this.progressData.dataLabels[0],
              formatter: () => (this.progressData.totalLabel ?
                this.progressData.getAverageData(this.isChecked) :
                this.progressData.getData(this.isChecked)[0] as number) + '%'
            }
          }
        }
      },
      stroke: {
        lineCap: 'round',
      },
      // labels: this.chartLabels
      labels: this.progressData.dataLabels
    };
  }

  private setCircleBarLabel(index?: number) {
    this.circleBarLabel = typeof index === 'number' ?
      this.progressData.getDisplayedData(this.isChecked)[index] as number :
      this.progressData.getTotalDisplayedData(this.isChecked);
  }

  private setData() {
    this.setCircleBarLabel();
    this.setChartOptions();
    // this.setSeries();
    // this.setLabels();
    // this.setValues();
    // this.setSalaryAmount();
    // this.setSalaryAverage();
  }

  //
  // private setValues(): void {
  //   this.chartValues = this.salaryIndicators.map(value => this.isChecked ? value.checkedValue : value.onCheckingValue);
  // }
  //
  // private setSeries(): void {
  //   this.chartSeries = this.isChecked ? this.progressData.switchedData[0] : this.progressData.data[0];  // must be
  //   this.chartSeries = this.salaryIndicators.map(value => this.isChecked ?
  //     Math.round(value.checkedValue / value.maxValue * 100) :
  //     Math.round(value.onCheckingValue / value.maxValue * 100));
  // }
  //
  // private setLabels(): void {
  //   this.chartLabels = this.progressData.name; // must be
  //   this.chartLabels = this.salaryIndicators.map(value => value.nameIndicator);
  // }
  //
  // private setSalaryAmount(): void {
  //   // this.salaryAmount = this.progressData.getTotalData()
  //   this.salaryAmount = this.chartValues.reduce((pV, cV) => pV + cV);
  // }
  //
  // private setSalaryAverage(): void {
  //   this.salaryAverage = this.chartSeries.reduce((pV, cV) => pV + cV) / this.chartSeries.length;
  // }

  ngOnChanges(changes: SimpleChanges): void {
    this.setData();
    // this.setChartOptions();
  }

}
