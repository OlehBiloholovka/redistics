import {Component, Input, OnInit} from '@angular/core';
import {RegistrationIndicatorService} from '../../../share/services/registration-indicator.service';
import {CardData} from '../dashboard-card/card-data.model';

@Component({
  selector: 'app-team-partner-dashboard',
  templateUrl: './team-partner-dashboard.component.html',
  styleUrls: ['./team-partner-dashboard.component.css']
})
export class TeamPartnerDashboardComponent implements OnInit {
  dashboardCardName: string;
  // employees: Employee [];
  @Input() userCode: number | string;
  cardData: CardData;

  constructor(private ris: RegistrationIndicatorService) {
    this.dashboardCardName = 'Партнер 3+ команди';
    // this.employees = this.ris.getTeamPartnerEmployeesRank();
    this.cardData = this.ris.getTeamPartnerData();
  }

  ngOnInit(): void {
  }

}
