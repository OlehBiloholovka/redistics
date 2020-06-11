import { Injectable } from '@angular/core';
import {CardData} from '../../core/dashboard/dashboard-card/card-data.model';
import {RegistrationIndicatorService} from './registration-indicator.service';
import {SalaryIndicatorService} from './salary-indicator.service';
import {SalesIndicatorService} from './sales-indicator.service';
import {ActivationsService} from './activations.service';

@Injectable({
  providedIn: 'root'
})
export class TeamRankService {

  constructor(private regService: RegistrationIndicatorService,
              private salaryService: SalaryIndicatorService,
              private salesService: SalesIndicatorService,
              private activationsService: ActivationsService) { }

  getTeamData(): CardData {
    const cardData = new CardData();
    cardData.cardDate = Date.now();
    cardData.multipleCardDate = [Date.now(), Date.now() - 200000000, Date.now() - 400000000];
    cardData.rankButtons = [
      'Винагорода', 'ППР', 'Партнер ІП', 'Партнер 3+', 'Активації та АП', 'Продажі СП', 'Продажі СК', 'Продажі ЕП'
    ];
    cardData.multipleRankData = [
      this.salaryService.getTeamSalaryEmployeesRank(),
      this.regService.getTeamPprEmployeesRank(),
      this.regService.getTeamIndividualEmployeesRank(),
      this.regService.getTeamPartnerEmployeesRank(),
      this.activationsService.getTeamActivationsEmployeesRank(),
      this.salesService.getTeamSalesEmployeesRank(),
      this.salesService.getTeamSalesEmployeesRank(),
      this.salesService.getTeamSalesEmployeesRank()
    ];
    return cardData;
  }
}
