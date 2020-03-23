import {Component, OnInit} from '@angular/core';
import {Employee} from '../dashboard-card/dashboard-card.component';
import {RegistrationIndicator} from '../../../share/models/registration-indicator.model';
import {RegistrationIndicatorService} from '../../../share/services/registration-indicator.service';

@Component({
  selector: 'app-ppr-dashboard',
  templateUrl: './ppr-dashboard.component.html',
  styleUrls: ['./ppr-dashboard.component.css']
})
export class PprDashboardComponent implements OnInit {
  dashboardCardName: string;
  employees: Employee[];
  registrationIndicator: RegistrationIndicator;

  constructor(private ris: RegistrationIndicatorService) {
    this.dashboardCardName = 'ППР';
    this.employees = [
      {name: 'Hot', checkedLevel: 0.85, onCheckingLevel: 1.05},
      {name: 'Shkvarok', checkedLevel: 0.56, onCheckingLevel: 1.25, userCode: 12345},
      {name: 'Petrivkyi', checkedLevel: 0.32, onCheckingLevel: 0.42},
      {name: 'Petriv', checkedLevel: 0.78, onCheckingLevel: 0.89}
    ];
    this.registrationIndicator = this.ris.getPprRegistrationIndicator();
  }

  ngOnInit(): void {
  }

}
