import {
  Component, Input,
  OnInit
} from '@angular/core';
import {SalaryIndicatorService} from '../../../share/services/salary-indicator.service';
import {SalaryIndicator} from '../../../share/models/salary-indicator.model';
import {Employee} from '../dashboard-card/dashboard-card.component';

@Component({
  selector: 'app-salary-dashboard',
  templateUrl: './salary-dashboard.component.html',
  styleUrls: ['./salary-dashboard.component.css']
})
export class SalaryDashboardComponent implements OnInit {
  dashboardCardName: string;
  salaryIndicators: SalaryIndicator[];
  employees: Employee[];
  @Input() userCode: number | string;

  constructor(private sis: SalaryIndicatorService) {
    this.dashboardCardName = 'Винагорода';
    this.salaryIndicators = sis.getSalaryIndicators();
    this.employees = sis.getSalaryEmployeesRank();
  }

  ngOnInit(): void {
  }
}
