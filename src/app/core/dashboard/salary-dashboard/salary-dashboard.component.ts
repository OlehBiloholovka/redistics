import {
  Component,
  OnInit
} from '@angular/core';
import {SalaryIndicatorService} from '../../../share/services/salary-indicator.service';
import {SalaryIndicator} from '../../../share/models/salary-indicator.model';

@Component({
  selector: 'app-salary-dashboard',
  templateUrl: './salary-dashboard.component.html',
  styleUrls: ['./salary-dashboard.component.css']
})
export class SalaryDashboardComponent implements OnInit {
  dashboardCardName: string;
  salaryIndicators: SalaryIndicator[];

  constructor(private sis: SalaryIndicatorService) {
    this.dashboardCardName = 'Винагорода';
    this.salaryIndicators = sis.getSalaryIndicators();
  }

  ngOnInit(): void {
  }
}
