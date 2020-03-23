import {DashboardCategoryBoard} from '../dashboard-category-board.model';
import {DashboardProgressBar} from '../../dashboard-progress-bar/dashboard-progress-bar.model';

export class DashboardCategoryProgressBoard implements DashboardCategoryBoard {
  prefixBoardLabel: string;
  progressBars: DashboardProgressBar[] = new Array<DashboardProgressBar>();
  suffixBoardLabel: string | number;
}
