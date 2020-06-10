import {Component, Input, OnInit} from '@angular/core';
import {SalesIndicatorService} from '../../../share/services/sales-indicator.service';
import {CardData} from '../dashboard-card/card-data.model';

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
  // employees: Employee[];
  // salesIndicators: ProgressData;
  // salesChartIndicators: ProgressData;
  cardData: CardData;
  // salesChartSeries: ProgressData[];

  constructor(private salesIS: SalesIndicatorService) {
    this.frontDashboardCardName = 'Продажі';
    this.backDashboardCardName = 'Рейтинг ' + this.frontDashboardCardName;
    this.toggleName = 'Прогноз';
    // this.employees = salesIS.getSPSalesEmployeesRank();
    // this.salesIndicators = this.salesIS.getSalesIndicators();
    // this.salesChartIndicators = this.salesIS.getSalesChartIndicators();
    this.cardData = salesIS.getSalesData();
    // this.salesChartSeries = salesIS.getSalesChartSeries();
  }

  ngOnInit(): void {
  }

}
