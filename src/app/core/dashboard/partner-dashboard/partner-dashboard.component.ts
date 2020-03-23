import {Component, OnInit} from '@angular/core';
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

  constructor(private ris: RegistrationIndicatorService) {
    this.dashboardCardName = 'Партнер 3+';
    this.employees = [
      {name: 'Hot', checkedLevel: 0.35, onCheckingLevel: 0.54},
      {name: 'Petriv', checkedLevel: 0.28, onCheckingLevel: 0.78},
      {name: 'Shkvarok', checkedLevel: 0.46, onCheckingLevel: 0.52, userCode: 12345},
      {name: 'Petrivkyi', checkedLevel: 0.12, onCheckingLevel: 0.3}
    ];
    this.registrationIndicator = this.ris.getPartnerRegistrationIndicator();
  }

  ngOnInit(): void {
  }
}
