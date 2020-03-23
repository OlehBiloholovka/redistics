import {Component, OnInit} from '@angular/core';
import {Employee} from '../dashboard-card/dashboard-card.component';
import {RegistrationIndicator} from '../../../share/models/registration-indicator.model';
import {RegistrationIndicatorService} from '../../../share/services/registration-indicator.service';

@Component({
  selector: 'app-individual-dashboard',
  templateUrl: './individual-dashboard.component.html',
  styleUrls: ['./individual-dashboard.component.css']
})
export class IndividualDashboardComponent implements OnInit {
  dashboardCardName: string;
  employees: Employee[];
  registrationIndicator: RegistrationIndicator;

  constructor(private ris: RegistrationIndicatorService) {
    this.dashboardCardName = 'Індивідуальний план';
    this.employees = [
      {name: 'Hot', checkedLevel: 0.46, onCheckingLevel: 1.05},
      {name: 'Petriv', checkedLevel: 0.78, onCheckingLevel: 0.8},
      {name: 'Shkvarok', checkedLevel: 0.56, onCheckingLevel: 0.7, userCode: 12345},
      {name: 'Petrivkyi', checkedLevel: 0.32, onCheckingLevel: 0.9}
    ];
    this.registrationIndicator = this.ris.getIndividualRegistrationIndicator();
  }

  ngOnInit(): void {
  }

}
