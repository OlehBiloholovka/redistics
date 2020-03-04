import { Component, OnInit } from '@angular/core';
import {ChartOptions} from '../dashboard.component';

@Component({
  selector: 'app-salary-dashboard',
  templateUrl: './salary-dashboard.component.html',
  styleUrls: ['./salary-dashboard.component.css']
})
export class SalaryDashboardComponent implements OnInit {

  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [44, 105, 67, 83],
      chart: {
        height: 350,
        type: 'radialBar'
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px'
            },
            value: {
              fontSize: '32px'
            },
            total: {
              fontSize: '36px',
              show: true,
              label: 'Total',
              formatter: () => '249'
            }
          }
        }
      },
      labels: ['Apples', 'Oranges', 'Bananas', 'Berries']
    };
  }

  ngOnInit(): void {
  }

}
