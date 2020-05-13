import {Component, Input, OnInit} from '@angular/core';
import {RegistrationIndicatorService} from '../../../share/services/registration-indicator.service';
import {CardData} from '../dashboard-card/card-data.model';

@Component({
  selector: 'app-team-individual-dashboard',
  templateUrl: './team-individual-dashboard.component.html',
  styleUrls: ['./team-individual-dashboard.component.css']
})
export class TeamIndividualDashboardComponent implements OnInit {
  dashboardCardName: string;
  // employees: Employee[];
  @Input() userCode: number | string;
  cardData: CardData;

  constructor(private ris: RegistrationIndicatorService) {
    this.dashboardCardName = 'Індивідуальний план команди';
    // this.employees = this.ris.getTeamIndividualEmployeesRank();
    this.cardData = this.ris.getTeamIndividualData();
  }

  ngOnInit(): void {
  }

}
