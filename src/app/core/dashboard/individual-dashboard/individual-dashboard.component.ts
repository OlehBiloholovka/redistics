import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../dashboard-card/dashboard-card.component';
import {RegistrationIndicator} from '../../../share/models/registration-indicator.model';
import {RegistrationIndicatorService} from '../../../share/services/registration-indicator.service';

@Component({
  selector: 'app-individual-dashboard',
  templateUrl: './individual-dashboard.component.html',
  styleUrls: ['./individual-dashboard.component.css']
})
export class IndividualDashboardComponent implements OnInit {
  frontDashboardCardName: string;
  backDashboardCardName: string;
  employees: Employee[];
  registrationIndicator: RegistrationIndicator;
  @Input() userCode: number | string;

  constructor(private ris: RegistrationIndicatorService) {
    this.frontDashboardCardName = 'Індивідуальний план';
    this.backDashboardCardName = 'Рейтинг ' + this.frontDashboardCardName;
    this.employees = this.ris.getIndividualEmployeesRank();
    this.registrationIndicator = this.ris.getIndividualRegistrationIndicator();
  }

  ngOnInit(): void {
  }

}
