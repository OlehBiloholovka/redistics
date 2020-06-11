import {Component, Input, OnInit} from '@angular/core';
import {SalaryIndicatorService} from '../../../share/services/salary-indicator.service';
import {CardData} from '../dashboard-card/card-data.model';

@Component({
  selector: 'app-salary-dashboard',
  templateUrl: './salary-dashboard.component.html',
  styleUrls: ['./salary-dashboard.component.css']
})
export class SalaryDashboardComponent implements OnInit {
  dashboardCardName: string;
  // salaryIndicators: SalaryIndicator[];
  // salaryIndicators: ProgressData;
  // employees: Employee[];
  @Input() userCode: number | string;
  cardData: CardData;

  constructor(private sis: SalaryIndicatorService) {
    this.dashboardCardName = 'Винагорода';
    // this.salaryIndicators = sis.getSalaryIndicatorsOLD();
    // this.salaryIndicators = this.sis.getSalaryIndicators();
    // this.employees = sis.getSalaryEmployeesRank();
    this.cardData = sis.getSalaryEmployeesData();
  }

  ngOnInit(): void {
  }
}
