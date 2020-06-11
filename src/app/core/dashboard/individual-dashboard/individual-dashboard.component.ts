import {Component, Input, OnInit} from '@angular/core';
import {RegistrationIndicatorService} from '../../../share/services/registration-indicator.service';
import {CardData} from '../dashboard-card/card-data.model';

@Component({
  selector: 'app-individual-dashboard',
  templateUrl: './individual-dashboard.component.html',
  styleUrls: ['./individual-dashboard.component.css']
})
export class IndividualDashboardComponent implements OnInit {
  frontDashboardCardName: string;
  backDashboardCardName: string;
  // employees: Employee[];
  // registrationIndicator: RegistrationIndicator;
  @Input() userCode: number | string;
  // individualIndicators: ProgressData;
  cardData: CardData;

  constructor(private ris: RegistrationIndicatorService) {
    this.frontDashboardCardName = 'Індивідуальний план';
    this.backDashboardCardName = 'Рейтинг ' + this.frontDashboardCardName;
    // this.employees = this.ris.getIndividualEmployeesRank();
    // this.registrationIndicator = this.ris.getIndividualRegistrationIndicator();
    // this.individualIndicators = this.ris.getIndividualIndicators();
    this.cardData = this.ris.getIndividualData();
  }

  ngOnInit(): void {
  }

}
