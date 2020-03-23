import {DashboardProgressBar} from '../dashboard-progress-bar/dashboard-progress-bar.model';

export interface DashboardCategoryBoard {
  prefixBoardLabel: string;
  suffixBoardLabel: string | number;
  progressBars: DashboardProgressBar[];
}
