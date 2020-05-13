import {ProgressData} from './progress-data.model';
import {Employee} from './dashboard-card.component';
import {RegistrationIndicator} from '../../../share/models/registration-indicator.model';

export class CardData {
  circleBarData?: ProgressData;
  radialBarData?: ProgressData;
  chartData?: ProgressData;
  rankData?: Employee[];
  calculationData?: RegistrationIndicator;
  cardDate: number;
}
