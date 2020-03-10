import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ChartOptions} from '../dashboard.component';

@Component({
  selector: 'app-salary-dashboard',
  templateUrl: './salary-dashboard.component.html',
  styleUrls: ['./salary-dashboard.component.css']
})
export class SalaryDashboardComponent implements OnInit {

  constructor() {
    this.chartOptions = {
      series: [44, 105, 67, 83],
      chart: {
        height: 300,
        type: 'radialBar'
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '1.5em'
            },
            value: {
              fontSize: '1.5em'
            },
            total: {
              fontSize: '1.75em',
              show: true,
              label: 'Всього',
              formatter: () => '249'
            }
          }
        }
      },
      stroke: {
        lineCap: 'round',
      },
      labels: ['ППР', 'Партер', 'Активації', '% СП з АП']
    };
  }

  public chartOptions: Partial<ChartOptions>;
  @Output() getCardName: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    this.getCardName.emit('Винагорода');
  }

  // onGetCardName() {
  //   this.getCardName.emit('Винагорода');
  // }

}
