import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../dashboard-card/dashboard-card.component';
import {RegistrationIndicator} from '../../../share/models/registration-indicator.model';
import {RegistrationIndicatorService} from '../../../share/services/registration-indicator.service';

@Component({
  selector: 'app-ppr-dashboard',
  templateUrl: './ppr-dashboard.component.html',
  styleUrls: ['./ppr-dashboard.component.css']
})
export class PprDashboardComponent implements OnInit {
  frontDashboardCardName: string;
  backDashboardCardName: string;
  employees: Employee[];
  registrationIndicator: RegistrationIndicator;
  @Input() userCode: number | string;

  constructor(private ris: RegistrationIndicatorService) {
    this.frontDashboardCardName = 'ППР';
    this.backDashboardCardName = 'Рейтинг ' + this.frontDashboardCardName;
    this.employees = this.ris.getPprEmployeesRank();
    this.registrationIndicator = this.ris.getPprRegistrationIndicator();
  }

  ngOnInit(): void {
  }

}
