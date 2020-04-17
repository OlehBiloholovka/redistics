import {Component, Input, OnInit} from '@angular/core';
import {SalesIndicatorService} from '../../../share/services/sales-indicator.service';
import {Employee} from '../dashboard-card/dashboard-card.component';
import {ProgressSeries} from '../dashboard-card/progress-series.model';

@Component({
  selector: 'app-sales-dashboard',
  templateUrl: './sales-dashboard.component.html',
  styleUrls: ['./sales-dashboard.component.css']
})
export class SalesDashboardComponent implements OnInit {
  @Input() userCode: number | string;
  frontDashboardCardName: string;
  backDashboardCardName: string;
  toggleName: string;
  employees: Employee[];
  progressSeries: ProgressSeries;
  salesChartSeries: ProgressSeries[];

  constructor(private salesIS: SalesIndicatorService) {
    this.frontDashboardCardName = 'Продажі';
    this.backDashboardCardName = 'Рейтинг ' + this.frontDashboardCardName;
    this.toggleName = 'Прогноз';
    this.employees = salesIS.getSalesEmployeesRank();
    this.progressSeries = this.salesIS.getSalesProgressSeries();
    this.salesChartSeries = salesIS.getSalesChartSeries();
  }

  ngOnInit(): void {
  }

}
