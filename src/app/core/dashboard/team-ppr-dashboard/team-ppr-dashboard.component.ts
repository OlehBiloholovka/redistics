import {Component, Input, OnInit} from '@angular/core';
import {RegistrationIndicatorService} from '../../../share/services/registration-indicator.service';
import {CardData} from '../dashboard-card/card-data.model';

@Component({
  selector: 'app-team-ppr-dashboard',
  templateUrl: './team-ppr-dashboard.component.html',
  styleUrls: ['./team-ppr-dashboard.component.css']
})
export class TeamPprDashboardComponent implements OnInit {
  dashboardCardName: string;
  // employees: Employee[];
  @Input() userCode: number | string;
  cardData: CardData;

  constructor(private ris: RegistrationIndicatorService) {
    this.dashboardCardName = 'ППР команди';
    // this.employees = this.ris.getTeamPprEmployeesRank();
    this.cardData = this.ris.getTeamPprData();
  }

  ngOnInit(): void {
  }

}
