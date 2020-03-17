import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ChartComponent} from 'ng-apexcharts';
import {ChartOptions} from '../dashboard-card.component';

@Component({
  selector: 'app-dashboard-progress-radial-bar',
  templateUrl: './dashboard-progress-radial-bar.component.html',
  styleUrls: ['./dashboard-progress-radial-bar.component.css']
})
export class DashboardProgressRadialBarComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  @Input() radialBarSeries!: number[];
  indicatorChartOptions: Partial<ChartOptions>;

  constructor() { }

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

}
