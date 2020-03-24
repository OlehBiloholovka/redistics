import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ChartOptions} from '../../dashboard.component';
import {SalaryIndicator} from '../../../../share/models/salary-indicator.model';

@Component({
  selector: 'app-dashboard-salary-radial-bar',
  templateUrl: './dashboard-salary-radial-bar.component.html',
  styleUrls: ['./dashboard-salary-radial-bar.component.css']
})
export class DashboardSalaryRadialBarComponent implements OnInit, OnChanges {
  @Input() isChecked: boolean;
  @Input() salaryIndicators: SalaryIndicator[];
  @Output() mouseEvent = new EventEmitter();
  public chartOptions: Partial<ChartOptions>;
  chartSeries: number[];
  chartValues: number[];
  chartLabels: string[];
  salaryAverage: number;
  salaryAmount: number;

  constructor() {
  }

  ngOnInit(): void {
    this.setData();
    this.setChartOptions();
  }

  private setChartOptions() {
    this.chartOptions = {
      series: this.chartSeries,
      chart: {
        height: 300,
        type: 'radialBar',
        events: {
          dataPointMouseEnter: (e: any, chart?: any, options?: any) => {
            this.mouseEvent.emit(this.chartValues[options.dataPointIndex]);
          },
          dataPointMouseLeave: () => {
            this.mouseEvent.emit(this.salaryAmount);
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
            },
            total: {
              fontSize: '1.5em',
              show: true,
              label: 'Всього',
              formatter: () => this.salaryAverage + '%'
            }
          }
        }
      },
      stroke: {
        lineCap: 'round',
      },
      labels: this.chartLabels
    };
  }

  private setData() {
    this.setSeries();
    this.setLabels();
    this.setValues();
    this.setSalaryAmount();
    this.setSalaryAverage();
  }

  private setValues(): void {
    this.chartValues = this.salaryIndicators.map(value => this.isChecked ? value.checkedValue : value.onCheckingValue);
  }

  private setSeries(): void {
    this.chartSeries = this.salaryIndicators.map(value => this.isChecked ?
      Math.round(value.checkedValue / value.maxValue * 100) :
      Math.round(value.onCheckingValue / value.maxValue * 100));
  }

  private setLabels(): void {
    this.chartLabels = this.salaryIndicators.map(value => value.nameIndicator);
  }

  private setSalaryAmount(): void {
    this.salaryAmount = this.chartValues.reduce((pV, cV) => pV + cV);
  }

  private setSalaryAverage(): void {
    this.salaryAverage = this.chartSeries.reduce((pV, cV) => pV + cV) / this.chartSeries.length;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setData();
    this.setChartOptions();
  }

}
