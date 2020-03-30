import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../dashboard-card/dashboard-card.component';
import {RegistrationIndicatorService} from '../../../share/services/registration-indicator.service';

@Component({
  selector: 'app-team-individual-dashboard',
  templateUrl: './team-individual-dashboard.component.html',
  styleUrls: ['./team-individual-dashboard.component.css']
})
export class TeamIndividualDashboardComponent implements OnInit {
  dashboardCardName: string;
  employees: Employee[];
  @Input() userCode: number | string;

  constructor(private ris: RegistrationIndicatorService) {
    this.dashboardCardName = 'Індивідуальний план команди';
    this.employees = this.ris.getTeamIndividualEmployeesRank();
  }

  ngOnInit(): void {
  }

}
