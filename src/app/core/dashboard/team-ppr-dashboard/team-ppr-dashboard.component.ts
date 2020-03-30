import {Component, Input, OnInit} from '@angular/core';
import {RegistrationIndicatorService} from '../../../share/services/registration-indicator.service';
import {Employee} from '../dashboard-card/dashboard-card.component';

@Component({
  selector: 'app-team-ppr-dashboard',
  templateUrl: './team-ppr-dashboard.component.html',
  styleUrls: ['./team-ppr-dashboard.component.css']
})
export class TeamPprDashboardComponent implements OnInit {
  dashboardCardName: string;
  employees: Employee[];
  @Input() userCode: number | string;

  constructor(private ris: RegistrationIndicatorService) {
    this.dashboardCardName = 'ППР команди';
    this.employees = this.ris.getTeamPprEmployeesRank();
  }

  ngOnInit(): void {
  }

}
