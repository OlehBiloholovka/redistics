import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../dashboard-card/dashboard-card.component';
import {RegistrationIndicatorService} from '../../../share/services/registration-indicator.service';

@Component({
  selector: 'app-team-partner-dashboard',
  templateUrl: './team-partner-dashboard.component.html',
  styleUrls: ['./team-partner-dashboard.component.css']
})
export class TeamPartnerDashboardComponent implements OnInit {
  dashboardCardName: string;
  employees: Employee [];
  @Input() userCode: number | string;

  constructor(private ris: RegistrationIndicatorService) {
    this.dashboardCardName = 'Партнер 3+ команди';
    this.employees = this.ris.getTeamPartnerEmployeesRank();
  }

  ngOnInit(): void {
  }

}
