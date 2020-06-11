import {DashboardCategoryBoard} from '../dashboard-category-board.model';
import {DashboardProgressBar} from '../../dashboard-progress-bar/dashboard-progress-bar.model';

export class DashboardCategoryShareBoard implements DashboardCategoryBoard {
  prefixBoardLabel = 'A';
  progressBars: DashboardProgressBar[] = new Array<DashboardProgressBar>();
  suffixBoardLabel = 'B';
}
