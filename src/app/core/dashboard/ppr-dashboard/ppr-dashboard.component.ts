import {Component, Input, OnInit} from '@angular/core';
import {RegistrationIndicatorService} from '../../../share/services/registration-indicator.service';
import {CardData} from '../dashboard-card/card-data.model';

@Component({
  selector: 'app-ppr-dashboard',
  templateUrl: './ppr-dashboard.component.html',
  styleUrls: ['./ppr-dashboard.component.css']
})
export class PprDashboardComponent implements OnInit {
  frontDashboardCardName: string;
  backDashboardCardName: string;
  // employees: Employee[];
  // registrationIndicator: RegistrationIndicator;
  // pprIndicators: ProgressData;
  @Input() userCode: number | string;
  cardData: CardData;

  constructor(private ris: RegistrationIndicatorService) {
    this.frontDashboardCardName = 'ППР';
    this.backDashboardCardName = 'Рейтинг ' + this.frontDashboardCardName;
    // this.employees = this.ris.getPprEmployeesRank();
    // this.registrationIndicator = this.ris.getPprRegistrationIndicator();
    // this.pprIndicators = this.ris.getPprIndicators();
    this.cardData = this.ris.getPprData();
  }

  ngOnInit(): void {
  }

}
