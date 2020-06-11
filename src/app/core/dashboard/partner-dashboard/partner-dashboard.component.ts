import {Component, Input, OnInit} from '@angular/core';
import {RegistrationIndicatorService} from '../../../share/services/registration-indicator.service';
import {CardData} from '../dashboard-card/card-data.model';

@Component({
  selector: 'app-partner-dashboard',
  templateUrl: './partner-dashboard.component.html',
  styleUrls: ['./partner-dashboard.component.css']
})
export class PartnerDashboardComponent implements OnInit {

  frontDashboardCardName: string;
  backDashboardCardName: string;
  // employees: Employee[];
  // registrationIndicator: RegistrationIndicator;
  // partnerIndicators: ProgressData;
  @Input() userCode: number | string;
  cardData: CardData;

  constructor(private ris: RegistrationIndicatorService) {
    this.frontDashboardCardName = 'Партнер 3+';
    this.backDashboardCardName = 'Рейтинг ' + this.frontDashboardCardName;
    // this.employees = this.ris.getPartnerEmployeesRank();
    // this.registrationIndicator = this.ris.getPartnerRegistrationIndicator();
    // this.partnerIndicators = this.ris.getPartnerIndicators();
    this.cardData = this.ris.getPartnerData();
  }

  ngOnInit(): void {
  }
}
