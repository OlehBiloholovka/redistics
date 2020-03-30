import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../dashboard-card/dashboard-card.component';
import {RegistrationIndicator} from '../../../share/models/registration-indicator.model';
import {RegistrationIndicatorService} from '../../../share/services/registration-indicator.service';

@Component({
  selector: 'app-partner-dashboard',
  templateUrl: './partner-dashboard.component.html',
  styleUrls: ['./partner-dashboard.component.css']
})
export class PartnerDashboardComponent implements OnInit {

  dashboardCardName: string;
  employees: Employee[];
  registrationIndicator: RegistrationIndicator;
  @Input() userCode: number | string;

  constructor(private ris: RegistrationIndicatorService) {
    this.dashboardCardName = 'Партнер 3+';
    this.employees = this.ris.getPartnerEmployeesRank();
    this.registrationIndicator = this.ris.getPartnerRegistrationIndicator();
  }

  ngOnInit(): void {
  }
}
